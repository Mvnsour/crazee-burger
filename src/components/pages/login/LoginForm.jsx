import { useState } from "react";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to your space ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Welcome to our site</h1>
      <h2>Sign in</h2>
      <br />
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your first name"
        onChange={handleChange}
        required
      />
      <button type="submit">Access your space</button>
    </form>
  );
}
