import css from 'styled-jsx/css'

export default css`
.content {
  width: 100%;
  padding: 10px 40px;
  background: white;
  margin: 20px;
}

a {
  border-bottom: 1px solid black;
  text-decoration: none;
  color: black;
}

a :hover {
  color: white;
}

h2 {
  background: transparent;
  color: black;
  display: inline-block;
}

h2 :hover{
  background: black;
  color: white;
  border-bottom: 1px solid white;
}
 `
