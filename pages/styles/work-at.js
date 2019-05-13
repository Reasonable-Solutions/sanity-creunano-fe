import css from "styled-jsx/css";
import { breakpoints } from "./breakpoints.js";

export default css`
  li {
    list-style: none;
    width: 100%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    padding: 0;
  }

  @media screen and ${breakpoints.small} {
    ul {
      flex-direction: row;
      padding: 20px;
    }
    li {
      width: 50%;
      display: flex;
    }
  }
`;
