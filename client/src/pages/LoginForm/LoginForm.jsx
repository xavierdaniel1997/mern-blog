import {useNavigate} from "react-router-dom";

import "./LoginForm.css";

const LoginForm = () => {

  const navigateToSignupForm = useNavigate();
  const goToNavigateToSignupForm = () => {
    navigateToSignupForm("/signup")
  }

  return (
    <div className="login-form-container">
      <form className="form-container">
        <h1 className="form-title">Log In To Get Start</h1>

        <label className="input-label">Email</label>
        <input type="text" className="form-input" />

        <label className="input-label">password</label>
        <input type="password" className="form-input" />

        <div className="sub-container">
          <div className="remember-me">
            <input type="checkbox" value="true" className="check-box"/>
            <span>Remember Me</span>
          </div>
          <div className="forgot-psw">
            <span>Forgot Password</span>
          </div>
        </div>
        <button type="submit" className="login-btn">Log In</button>
        <p className="got-signin">Don't have an account ? <span onClick={goToNavigateToSignupForm}>Sign Up</span></p>
      </form>
    </div>
  );
};

export default LoginForm;
