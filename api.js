// Base class that provides common functionality to other API classes
class BaseApi {
  constructor() {
    this.baseUrl = "https://invest-easy-backend.herokuapp.com/api";
    // this.baseUrl = "http://127.0.0.1:8000/api";
    // this.token = token;
  }

  async request(method, url, body) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method,
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${this.token}`
      // },
      body: body ? JSON.stringify(body) : undefined,
    });
    const data = await response.json();
    return data;
  }
}

// Class that handles authentication-related APIs
class AuthApi extends BaseApi {
  async register(email, password, name) {
    return this.request("POST", "/auth/register", { email, password, name });
  }

  async login(email, password) {
    const data = await this.request("POST", "/auth/login", { email, password });
    this.token = data.token;
    return data;
  }

  async logout() {
    await this.request("POST", "/auth/logout");
    this.token = null;
  }
}

// Class that handles investor-related APIs
class InvestorApi extends BaseApi {
  async getAll() {
    return this.request("GET", "/investors");
  }

  async create(name, email, bankAccount) {
    return this.request("POST", "/investors", {
      name,
      email,
      bank_account: bankAccount,
    });
  }

  async get(id) {
    return this.request("GET", `/investors/${id}`);
  }

  async update(id, name, email, bankAccount) {
    return this.request("PUT", `/investors/${id}`, {
      name,
      email,
      bank_account: bankAccount,
    });
  }

  async delete(id) {
    return this.request("DELETE", `/investors/${id}`);
  }
}

// Class that handles property-related APIs
export class PropertyApi extends BaseApi {
  async getAll() {
    return this.request("GET", "/property/get_listings");
  }
}

// Class that handles event-related APIs
class EventApi extends BaseApi {
  async getActive() {
    return this.request("GET", "/events/active");
  }

  async preApprove(eventId, investorId, amount) {
    return this.request("POST", "/pre-approve", {
      event_id: eventId,
      investor_id: investorId,
      amount,
    });
  }
}
