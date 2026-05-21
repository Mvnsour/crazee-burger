import { useState } from "react";

export default function LoginForm() {
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to your space ${firstName}`);
    setFirstName("");
  };

  const handleChange = (e) => {
    setFirstName(e.target.value);
  };

  return (
    <>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="Enter your first name"
          onChange={handleChange}
          required
        />
        <button type="submit">Access your space</button>
      </form>
    </>
  );
}
