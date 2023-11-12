import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"
import styles from '@/styles/loginDetails.module.css'

export default function LoginDetails() {
  const [authState, onStateChange] = useState("signIn");

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

  const router = useRouter();
  const signInClick = async (event) => {
    event.preventDefault();
    alert("Signed In");

    router.push('/portfolio');
  }

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:p-28">
      {authState === "signIn" && (
        <div className="shadow-lg bg-gradient-to-r from-[#112854] to-[#169bd7] rounded-2xl flex flex-col p-6 py-12 min-w-full md:min-w-[700px] md:py-24 md:p-20">
          <div className="font-headings text-2xl text-center text-white font-semibold md:text-4xl">
            Welcome Back
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
        <div className="shadow-lg bg-gradient-to-r from-[#112854] to-[#169bd7] rounded-2xl flex flex-col p-6 py-12 min-w-full md:min-w-[700px] md:py-24 md:p-20">
          <div className="font-headings text-2xl text-center text-white font-semibold md:text-4xl">
            Get Started
          </div>

          <form onSubmit={e => signInClick(e)}>
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
        <div className="shadow-lg bg-gradient-to-r from-[#112854] to-[#169bd7] rounded-2xl flex flex-col p-6 py-12 min-w-full md:min-w-[700px] md:py-24 md:p-20">
          <div className="font-headings text-2xl text-center text-white font-semibold md:text-4xl">
            Forgot your password
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