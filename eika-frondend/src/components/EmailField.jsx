export default function EmailField({ email, setEmail }) {
  return (
    <div className="login-field-container">
      <label className="login-field-title">Email</label>
      <input
        className="login-field-input"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
