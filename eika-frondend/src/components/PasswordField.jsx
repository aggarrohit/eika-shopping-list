export default function PasswordField({ password, setPassword }) {
  return (
    <div className="login-field-container">
      <label className="login-field-title">Password</label>
      <input
        className="login-field-input"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
