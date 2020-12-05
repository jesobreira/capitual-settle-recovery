import styled from "styled-components";
import { shade } from "polished";
import colors from "~/styles/colors";

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 70px;
  margin: 0 auto;
  padding-left: 24px;
  padding-right: 24px;
  box-shadow: 24px 0px 35px 0px ${colors.gray};
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  max-width: 1166px;
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex: 0.45;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex: 0.7;
  }

  @media (max-width: 1100px) {
    flex: 0.6;
  }
`;

export const Menu = styled.ul`
  display: flex;
  flex: 0.85;
  align-items: center;
  justify-content: space-between;

  margin-left: 50px;

  li {
    list-style-type: none;

    a {
      text-decoration: none;
      color: ${colors.darker};

      &:hover {
        color: ${colors.blue};
      }
    }
  }

  @media (max-width: 799px) {
    display: none;
  }

  @media (max-width: 800px) {
    flex: 0.9;
  }

  @media (max-width: 1024px) {
    flex: 1;
  }
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 20px;
  box-shadow: 24px 0px 75px 30px ${colors.gray};
  backdrop-filter: blur(3px);
`;

export const BoxHeader = styled.div`
  padding: 40px;
  background-color: ${colors.blue};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  img {
    width: 366px;
    height: 199px;
    margin-top: -90px;
  }

  h1 {
    margin-top: 5px;
    font-size: 30px;
  }

  p {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  margin: 40px 5px 0 5px;
  border: none;

  &:hover {
    background: ${shade(0.2, colors.blue)};
  }
`;
