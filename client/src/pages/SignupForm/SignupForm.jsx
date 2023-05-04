import { useNavigate } from "react-router-dom";

import "./SignupForm.css"

const SignupForm = () => {

  const navigateToLoginForm = useNavigate();
  const goToLoginForm = () => {
    navigateToLoginForm("/login")
  }
  return (
    <div className="signin-form-container">
    <form className="form-container">
      <h1 className="form-title">Create an Accournt</h1>

      <label className="input-label">Name</label>
      <input type="text" className="form-input" />

      <label className="input-label">Email</label>
      <input type="text" className="form-input" />

      <label className="input-label">password</label>
      <input type="password" className="form-input" />

      <div className="button-container">
         <button type="submit" className="sigin-btn">Sign Up</button>
      </div>

      <p className="got-signin">Already have an account <span onClick={goToLoginForm}>Log In</span></p>
    </form>
  </div>
  )
}

export default SignupForm