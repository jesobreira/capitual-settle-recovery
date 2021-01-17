import { createGlobalStyle } from "styled-components";
import colors from "./colors";

export default createGlobalStyle`

  @font-face {
    font-family: "Circular Std";
    src: url('/fonts/CircularStd-Book.otf') format('otf');
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  body, input, button {
    font-family: 'Circular Std', 'Roboto', sans-serif;
    background: #ffffff;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: ${colors.darker};
    font-size: 14px;
    font-weight: 700;
  }

  button {
    cursor: pointer;
    outline: none
  }

  h1 {
    font-size: 40px
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 17px
  }

  p {
    font-weight: 300;
  }

  a:focus,
  button:focus,
  a:active,
  button:active,
  a:visited,
  button:visited {
    outline: none;
    border: none;
  }

  ._loading_overlay_overlay {
    background: rgba(255, 255, 255, 0.7);
    width: 102%;
  }

  ._loading_overlay_spinner {
    color: #0f90ff;
  }

  ._loading_overlay_spinner svg circle {
    stroke: #0f90ff;
  }

  .react-tel-input .flag-dropdown {
    width: 70px;
    margin-left: -115px;
  }

  .react-tel-input .form-control {
    padding-left: 80px;
  }

`;
