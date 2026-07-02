import burgerLogo from "../../assets/logo/F03-logo-orange.png";
import styled from "styled-components";

export default function Logo() {
  return (
    <LogoStyled>
      <h1>Crazee</h1>
      <img src={burgerLogo} alt="Logo Crazee Burger" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  transform: scale(2.5);

  h1 {
    display: inline;
    color: #ffa01b;
    text-align: center;
    text-transform: uppercase;
    text-spacing: 1.5px;
    font-size: 36px;
    line-height: 1rem;
    font-weight: 700;
    font-family: "Amatic SC", cursive;
  }

  img {
    width: 80px;
    height: 60px;
    margin: 0 5px;
    object-fit: contain;
    object-position: center;
  }
`;
