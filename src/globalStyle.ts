import {createGlobalStyle} from 'styled-components'
import {normalize} from 'styled-normalize'

// noinspection Stylelint
export const GlobalStyle = createGlobalStyle`
  ${normalize};
  
   html, body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    font-family: 'Roboto', 'Segoe UI',sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    *, *:before, *:after {
    box-sizing: inherit;
    touch-action: none;
    -ms-touch-action: none;
    }
    input[type='number'] {
      -moz-appearance:textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
  }

  code {
    font-family: source-code-pro, monospace;
  }
`