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
    overflow-x: hidden;
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

  .alertify .alert>*, .alertify .dialog>*  {
    border-radius:20px;
  }

  .alertify .dialog .msg,.alertify .dialog{
   .title{
      text-align:center;
      font-weight:bold;
      padding: 10px 10px;
      font-size: 17px;
    }
    p{
      padding:10px 20px;
    }
    nav{
      padding: 0px 20px;
      margin-bottom:20px;
    }
  }

  .alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button) {
    width: 100%;
    background-color: #0f90ff;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 10px;
    margin: 10px 0px;
    border: none;
      &:hover {
      background-color: rgba(15,144,255, 0.8);
    }
  }
  .alertify .dialog nav button.cancel:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){
    background-color:#FF6378;
  }

`;
