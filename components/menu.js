import styles from "./styles/menu";
export default props => (
  <button
    className="global-header__button--menu js-toggle-global-header-overlay is-inverted"
    type="button"
    role="button"
    aria-label="Menu toggle button"
    aria-expanded="false"
    aria-haspopup="true"
  >
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="80px"
      height="80px"
      viewBox="0 0 80 80"
    >
      <g id="hamburger">
        <line
          id="mid-line"
          fill="none"
          stroke-width="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          x1="60"
          y1="40"
          x2="20"
          y2="40"
        />

        <path
          id="bottom-line"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeDasharray="50,1000"
          strokeDashoffset="10"
          d="   M60,52H20C3.5,52,5.1,28.8,17,16c17-18.2,55.6-8.6,41,6L22,58"
        />

        <path
          id="top-line"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeDasharray="50,1000"
          strokeDashoffset="-154"
          d="   M22,22l36,36l0,0c14.6,14.6-24,24.2-41,6C5.1,51.2,3.5,28,20,28h40"
        />
      </g>
    </svg>

    <span className="global-header__button--menu-flyout menu-label">Meny</span>
    <style jsx>{styles} </style>
  </button>
);
