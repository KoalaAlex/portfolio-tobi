import { css } from '@emotion/core'

const GlobalString = css`
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1em;
    color: white;
  }
  a{
    pointer-events: auto;
    cursor: pointer;
    color: #ff0057;
    text-decoration: none;
    text-shadow: 0 0.1rem 1rem rgb(30, 31, 36);
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6, p{
      font-family: 'IBM Plex Mono', 'Menlo', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', Courier, monospace;
      pointer-events: auto;
      margin-block-start: 0;
      margin-block-end: 0;
  }
  ul, li{
    margin: 0;
    padding 0;
    list-style-type: none;
  }
  button {
    background-color: unset;
    border: unset;
    padding: unset;
  }
`;

export default GlobalString;
