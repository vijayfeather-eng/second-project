import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | My Website",
  description: "Login to access your account.",
};

export default function Home() {
  return (
    <div className="login-page">

      <div className="login-box">

        <h1>Login to Continue</h1>
        <p>Enter your details to access account</p>

        <div className="input-group">
          <label>Email</label>
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>

          <a href="#">Forgot Password?</a>
        </div>

        <button>Sign In</button>

        <div className="signup">
          Don't have an account? <a href="/signup">Create Account</a>
        </div>

      </div>

    </div>
  );
}