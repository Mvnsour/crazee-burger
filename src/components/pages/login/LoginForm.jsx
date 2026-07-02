import { useNavigate } from "react-router";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PiUserCircleFill } from "react-icons/pi";
import Button from "../../Button";
import styled from "styled-components";

export default function LoginForm() {
  // state
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  // behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return; // bail out only when the field is empty
    navigate(`order/${inputValue.trim()}`);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // render
  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div>
        <PiUserCircleFill />
        <input
          type="text"
          value={inputValue}
          placeholder="Entrer votre prénom"
          onChange={handleChange}
          required
        />
      </div>
      <Button
        text="Accéder à mon espace"
        to={`/order/${inputValue.trim()}`}
        icon={<FaChevronRight size={16} />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
