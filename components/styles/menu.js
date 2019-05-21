import css from "styled-jsx/css";
import { breakpoints } from "../../pages/styles/breakpoints.js";

export default css`


.global-header__button--menu {
	top: 20px;
	right: calc(5% - 20px);
	bottom: auto;
	height: 80px;
	width: 80px;
	padding: 0;
	box-shadow: none;
	background-color: transparent;
        color: transparent;
}

.global-header__button--menu {
	display: inline-block;
	padding: 0;
	margin: 0;
	border: 0;
	background-color: transparent;
	text-decoration: none;
	transform-origin: 0 0;
	cursor: pointer;
	position: fixed;
	bottom: 20px;
	right: 5%;
	height: 50px;
	width: 50px;
	padding: 5px;
	border-radius: 50%;
	cursor: pointer;
	z-index: 11;
	overflow: visible;
	outline: 0;
}

svg { stroke: red; stroke-opacity: 0.7}
`;
