import burgerLogo from "../../assets/logo/F03-logo-orange.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <span>Crazee</span>
      <img src={burgerLogo} alt="Crazee Burger" />
      <span>Burger</span>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  background: blue;
`;
