import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  font-size: 60%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

 html, body, #root {
  height: 100vh;
}

body {
  background:  #27282F;
}


html, 
input,
button {
  font-family: 700 1.6rem Roboto;
} 

@media (max-width: 768px) {

html {
  font-size: 87.5%;
}

}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}
`;

export default GlobalStyle;