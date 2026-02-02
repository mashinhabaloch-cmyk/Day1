import React, { useState } from "react";

const LoginForm = () => {
  // State for controlled inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const isPasswordValid = password.length >= 6;
  const isFormValid = email !== "" && isPasswordValid;

  return (
    <div className="card">
      <h2>🔐 Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Real-time Validation Message */}
        {password.length > 0 && (
          <p className={isPasswordValid ? "success" : "error"}>
            {isPasswordValid
              ? "Looks good!"
              : "Password must be at least 6 characters"}
          </p>
        )}

        {/* Button disabled logic */}
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
