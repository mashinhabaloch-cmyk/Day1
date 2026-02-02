export default function Login({ onLogin }) {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Movie Hub</h1>
        <p>Sign in to continue</p>

        <input type="text" placeholder="Email or Username" />
        <input type="password" placeholder="Password" />

        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}
