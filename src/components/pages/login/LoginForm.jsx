import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../../Button";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) return;
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  // render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Welcome to our site!</h1>
      <h2>Sign in</h2>
      <br />
      <input
        type="text"
        value={inputValue}
        placeholder="Enter your first name"
        onChange={handleChange}
        required
      />
      {inputValue.trim() !== "" ? (
        <Button text="Access your space" to={`/order/${inputValue.trim()}`} />
      ) : (
        <button type="button" disabled>
          Access your space
        </button>
      )}
    </form>
  );
}
