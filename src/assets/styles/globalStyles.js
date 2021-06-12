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
    bottom: 120px
    flex-direction: column;
    flex-wrap: wrap;
    padding:80px 85px 0;
    font-family:'Montserrat';
@media only screen and (max-width: 800px){
    padding:10px 10px 0;
  }
}

button {
    padding:0;
    cursor:pointer;
    font-family:'Lato';
    }
    ul{
        padding:0;
        margin:0;
    }
    `

export default GlobalStyle
