import { useRouter } from "next/router"
import React, { useState } from "react"
import styles from '../styles/loginDetails.module.css'
import AuthApi from '../api'

export default function LoginDetails() {
  const [authState, onStateChange] = useState('signIn');

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  // Handle SignIn through API
  const router = useRouter();
  const signInClick = async (event) => {
    event.preventDefault();
    alert("Signed In");
    const api = new AuthApi();
    api.login(formData.email, formData.password).then(data => {
      router.push('/portfolio');
    });
  }

  // Handle Signup through API, redirects to login page to reenter new credentails
  const signUpClick = async (event) => {
    event.preventDefault();
    const api = new AuthApi();
    api.register(formData.email, formData.password, formData,name).then(data => {
      router.push('/login');
    });
  }

  return (
    <div className={styles.mainContainer}>
      {authState === "signIn" && (
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <span className={styles.highlight}>Welcome</span> Back
          </div>

          <form onSubmit={e => signInClick(e)}>
            <label for="email" className={styles.label}>Email</label>
            <input id="email" type="text" name="email" className={styles.input} value={formData.email} onChange={e => handleInputChange("email", e?.target?.value || "",)} />

            <label for="password" className={styles.label}>Password</label>
            <input id="password" type="text" name="password" className={styles.input} value={formData.password} onChange={e => handleInputChange("password", e?.target?.value || "",)} />
            <div className={styles.pageLink} onClick={() => onStateChange("forgotPassword")}>
              Forgot Password
            </div>

            <div className={styles.button}>
              <input type="submit" value="Sign In" className={styles.button_text} />
            </div>

            <div className={styles.signUpText}>
              Don't have an account: <span onClick={() => onStateChange("signUp")}>Sign Up</span>
            </div>
          </form>
        </div>
      )}
      {authState === "signUp" && (
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <span className={styles.highlight}>Get</span> Started
          </div>

          <form onSubmit={e => signUpClick(e)}>
            <label for="name" className={styles.label}>Full Name</label>
            <input id="name" type="text" name="name" className={styles.input} value={formData.name} onChange={e => handleInputChange("name", e?.target?.value || "",)} />

            <label for="email" className={styles.label}>Email</label>
            <input id="email" type="text" name="email" className={styles.input} value={formData.email} onChange={e => handleInputChange("email", e?.target?.value || "",)} />

            <label for="password" className={styles.label}>Password</label>
            <input id="password" type="text" name="password" className={styles.input} value={formData.password} onChange={e => handleInputChange("password", e?.target?.value || "",)} />

            <div className={styles.button}>
              <input type="submit" value="Sign Up" className={styles.button_text} />
            </div>

            <div className={styles.signUpText}>
              Need to <span onClick={() => onStateChange("signIn")}>Sign In</span>
            </div>
          </form>
        </div>
      )}
      {authState === "forgotPassword" && (
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <span className={styles.highlight}>Forgot </span>your password
          </div>
          <div className={styles.subheader}>
            No worries, enter your email address and we'll send you a email to reset it
          </div>

          <form onSubmit={e => forgotPasswordEntered(e)}>
            <label for="email" className={styles.label}>Email</label>
            <input id="email" type="text" name="email" className={styles.input} value={formData.email} onChange={e => handleInputChange("email", e?.target?.value || "",)} />

            <div className={styles.button}>
              <input type="submit" value="Send Link" className={styles.button_text} />
            </div>

            <div className={styles.signUpText}>
              Remembered the password: <span onClick={() => onStateChange("signIn")}>Sign In</span>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}