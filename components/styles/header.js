import css from 'styled-jsx/css'

export default css`

nav {
  display: flex;
  justify-content: space-around;
}

header {
  display: flex;
  flex-direction: column;
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
