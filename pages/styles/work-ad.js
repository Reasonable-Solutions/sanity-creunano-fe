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
  .jobAd-contacts {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
    order: 3;
  }
  .jobAd-contacts > div {
    width: 100%;
  }
  .jobAd > a :last-of-type {
    width: 100%;
    display: block;
    margin-top: 40px;
    order: 2;
  }

  @media screen and ${breakpoints.xsmall} {
    .jobAd-contacts {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    .jobAd-contacts > div {
      width: calc(50% - 10px);
    }
  }
  @media screen and ${breakpoints.small} {
    .jobAd {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .jobAd > div :first-of-type {
      flex: 1;
      padding-right: 80px;
    }

    .jobAd-contacts {
      width: 200px;
      flex-direction: column;
      order: 2;
      margin: 20px 0;
      justify-content: flex-start;
    }

    .jobAd-contacts > div {
      width: 100%;
      padding: 0;
    }
  }
  @media screen and ${breakpoints.medium} {
    .jobAd-contacts {
      width: 250px;
    }
  }
`;
