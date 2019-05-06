import css from 'styled-jsx/css'

export default css`

nav {
  display: flex;
  justify-content: space-around;
  transform: rotate(3.4deg) translateY(calc(-40px - 1.5vw));
}

header {
  display: flex;
  flex-direction: column-reverse;
  filter: invert(100%);
  min-height: 300px;
  height: 50vh;
  background: white;
  margin-bottom: 1rem;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    0 calc(100% - 6vw)
  );
}
`
