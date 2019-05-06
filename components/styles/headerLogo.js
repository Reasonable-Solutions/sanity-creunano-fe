import css from 'styled-jsx/css'

export default css`
.main {
  position: fixed;
  width: 666px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
}

.background {
  position: absolute;
}

.text {
  font-weight: 900;
  font-size: 20px;
}
.text h1 {
  mix-blend-mode: difference;
  color: white;
  margin-left: 1rem;
}
`
