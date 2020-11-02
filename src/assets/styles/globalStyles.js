import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
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
    padding:80px 85px 0;
    font-family:'Raleway';
}

button {
    padding:0;
    cursor:pointer;
    font-family:'Raleway';
    }
    ul{
        padding:0;
        margin:0;
    }
    `;

    export default  GlobalStyle;