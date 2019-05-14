import css from "styled-jsx/css";
import { breakpoints } from "../../pages/styles/breakpoints.js";

export default css`
  .jobAd {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 30px 60px 30px;
  }

  .hero-wrapper {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow: hidden;
  }
  .hero {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    will-change: opacity;
    min-height: 80vh;
    color: white;
    text-decoration: none;
    background: #000;
    z-index: 1;
  }

  .hero-media {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }

  .hero-content {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 30px;
    position: relative;
    z-index: 3;
  }

  .hero-media ::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "";
    display: block;
    background-color: rgba(25, 25, 25, 0.5);
    z-index: 2;
  }
  @media screen and ${breakpoints.small} {
    .jobAd {
      padding: 120px 5% 160px 5%;
    }
  }
`;
