import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html{
    box-sizing:border-box;
}
*,
*::before,
*::after{
    box-sizing: inherit;
}

body{
    margin-top:120px;
    max-height: 100vh;
    flex-direction: column;
    padding:80px 85px 0;
    font-family:'Montserrat';
    @media only screen and (max-width: 800px){
    padding:10px 10px 0;
  }
}

button {
    padding:0;
    cursor:pointer;
    font-family:'Montserrat';
    }
    ul{
        padding:0;
        margin:0;
    }
    `

export default GlobalStyle
