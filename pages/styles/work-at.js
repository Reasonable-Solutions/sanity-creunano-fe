import css from "styled-jsx/css";
import { breakpoints } from "./breakpoints.js";

export default css`
  li {
    list-style: none;
    width: 100%;
  }
  ul {
    justify-content: space-between;
    padding: 0;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 30px 60px 30px;
  }

  @media screen and ${breakpoints.small} {
    ul {
      display: -ms-flexbox;
      display: flex;
      flex-wrap: wrap;
      padding: 40px 5%;
    }
    li {
      width: 50%;
      display: -ms-flexbox;
      display: flex;
    }
  }
`;
