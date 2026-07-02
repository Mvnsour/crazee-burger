import LoginForm from "./LoginForm";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import BurgerBg from "../../../assets/images/F03-burger-bg.jpg";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <img src={BurgerBg} alt="Burger Background" />
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
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;
