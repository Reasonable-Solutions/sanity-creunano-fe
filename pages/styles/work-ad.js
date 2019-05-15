import css from "styled-jsx/css";
import { breakpoints } from "../../pages/styles/breakpoints.js";

export default css`
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

.hero-image { object-fit: cover; width: 100%;}
.hero-media {
        display: flex;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	overflow: hidden;
        opacity: 0.5;
        width: inherit;
        min-height: 100%;
        object-fit: cover;
}

.hero-content {
	width: 100%;
	max-width: 1400px;
	margin: 0 auto;
	padding: 20px 30px;
	position: relative;
	z-index: 3;
}
`
