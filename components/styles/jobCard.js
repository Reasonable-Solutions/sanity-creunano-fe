import css from "styled-jsx/css";
import { breakpoints } from "../../pages/styles/breakpoints.js";

export default css`
  div {
    flex: 1;
    padding: 10px;
    background: white;
    margin: 20px 0;
  }

  a {
    border-bottom: 1px solid black;
    text-decoration: none;
    color: inherit;
  }

  h2 {
    background: transparent;
    color: black;
    display: inline-block;
    word-break: break-word;
  }

  h2 :hover {
    background: black;
    color: white;
    border-bottom: 1px solid white;
  }

  @media screen and ${breakpoints.small} {
    div {
      padding: 10px 20px;
      margin: 20px;
    }
  }
`;
