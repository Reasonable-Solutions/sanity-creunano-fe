import css from "styled-jsx/css";
import { breakpoints } from "../../pages/styles/breakpoints.js";

export default css`
  .main-text {
    padding-right: 80px;
  }
  .jobAd {
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 30px 60px 30px;
  }
  @media screen and ${breakpoints.small} {
    .jobAd {
      flex-direction: row;
    }
  }
`;
