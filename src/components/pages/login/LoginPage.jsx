import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import BurgerBg from "../../../assets/images/F03-burger-bg.jpg";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${BurgerBg});
  background-size: cover;
  background-position: center;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

/* 
  ::before {
    content: "";
    background: url("${BurgerBg}") rgba(0, 0, 0, 0.5);
    background-blend-mode: darken; 
    }
    
    */
