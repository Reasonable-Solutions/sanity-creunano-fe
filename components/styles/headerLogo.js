import css from 'styled-jsx/css'

export default css`
.header-logo {
  position: fixed;
  width: 666px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.header-logo__background {
  position: absolute;
}

.header-logo__text {
  font-weight: 900;
  font-size: 20px;
}
.header-logo__text h1 {
  mix-blend-mode: difference;
  color: white;
  margin-left: 1rem;
}
`
