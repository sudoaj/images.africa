// export default `

//   @import url('https://fonts.googleapis.com/css?family=Muli:300,400,500,700,900');
//   body {
//     font-family: 'Muli', sans-serif!important;
//   }

// `

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export default GlobalStyle;