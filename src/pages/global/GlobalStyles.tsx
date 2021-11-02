import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

/**
 * styled-normalize were used to match style compatibility between browsers.
 * https://www.npmjs.com/package/styled-normalize
 * https://styled-components.com/
 */
const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html,
  body {
    background-color: #e0caea;

    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  #root {
    width: 100%;
    height: 100%;
  }
  * {
  }
`;

export default GlobalStyle;
