import styled from "styled-components";
import { lighten, shade } from "polished";
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
  
  padding:5px;
  
  img{
    margin:5px 0px;
  }

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
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BoxContainer = styled.div`
  padding: 40px;
  border-radius: 20px;
  box-shadow: 24px 0px 75px 30px ${colors.gray};
  backdrop-filter: blur(3px);
  margin: 40px;

  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 25px;
  }

  p {
    margin-bottom: 7px;
    font-size: 15px;

    span {
      color: ${colors.blue};
    }
  }
`;

export const Form = styled.form`
  padding: 20px 0 20px 0;
  input {
    width: 100%;
    height: 50px;
    border-radius: 10px;

    font-size: 16px;
    font-weight: 400;
    margin-bottom: 17px;
  }

  input[type="text"],
  select {
    padding-left: 20px;

    &:valid {
      border: 2px solid ${colors.darker};
    }

    &:invalid {
      border: 2px solid ${colors.plate};
    }
    &:disabled {
      border: 2px solid ${colors.plate};
    }

    &:focus {
      border: 2px solid ${colors.blue};
    }

    @media (max-width: 490px) {
      padding-left: 20px;
    }
  }

  p {
    font-weight: 500;
  }

  div.radio {
    margin: 10px 0 20px 0;

    label {
      display: flex;
      align-items: center;

      input[type="radio"] {
        width: auto;
        height: 15px;
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  div {
    width: 48%;
  }

  div.full-width {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: ${colors.blue};
  color: ${colors.white};
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0px 10px 0px;
  border: none;

  &:hover {
    background: ${shade(0.2, colors.blue)};
  }
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  height: 100px;
  margin: 40px auto;
  padding: 30px 0px;
  border-top: 2px solid ${colors.plate};

  span,
  img {
    @media (max-width: 490px) {
      margin: 0px 10px;
    }
  }

  .heart {
    color: rgb(250, 100, 100);
    font-size: 30px;
    margin: 0px 3px;
  }
`;

