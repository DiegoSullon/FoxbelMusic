import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    background-color: cyan;
    height: 100vh;
    margin: 0;
    overscroll-behavior: none;
    width: 100%;
  }
  i {
    color: white;
  }
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
  #app{
    overflow-x: hidden;
    min-height: 100vh;
    display:flex;
  }
  /* Icons */
  .fa-bars{
    font-size: 2em;
  }
  .fa-times{
    position: relative;
    top: -60px;
    left: 20px;
  }
  .fa-search{
    color: #bdbdbd;
    font-size: 1.4em;
    position:relative;
    top: -30px;
    left: 250px;
    cursor: pointer;
  }
  .fa-user{
    color: #e86060;
    font-size: 1.4em;
  }
  #display-ico .fa-play{
    position:relative;
    font-size: 6em;
    top:-195px;
    right:-110px;
    cursor: pointer;
  }
  #card-icons .fa-play{
    position:relative;
    font-size: 3em;
    top:-125px;
    right:-75px;
    cursor: pointer;
  }
  #card-icons .fa-ellipsis-v{
    position:relative;
    font-size: 1.2em;
    top:-210px;
    right:-125px;
    cursor: pointer;
  }
  #volume-button .fa-volume-off{
    font-size: 2.5em;
  }
  /* toggle class */
  .selected{
    padding-left:.4em;
  }
  .navbar-open{
    position: absolute !important;
    display:inline-block !important;
    height: 100% !important;
    width:70% !important;
    z-index: 1 !important;
  }
  .navbar-open-ico{
    display:inline-block !important;
  }

  /* Input Range Volume*/
  input[type='range']:focus {
    outline: none;
  }

  input[type='range'],
  input[type='range']::-webkit-slider-runnable-track,
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;
  }

  input[type=range]::-webkit-slider-thumb {
    background-color: white;
    width: 21px;
    height: 21px;
    border: 3px solid white;
    border-radius: 50%;
    margin-top: -9px;
  }

  input[type=range]::-moz-range-thumb {
    background-color: white;
    width: 16px;
    height: 16px;
    border: 3px solid white;
    border-radius: 50%;
  }

  input[type=range]::-ms-thumb {
    background-color: #02C38A;
    width: 21px;
    height: 21px;
    border: 3px solid white;
    border-radius: 50%;
  }

  input[type=range]::-webkit-slider-runnable-track {
    background-color: white;
    height: 5px;
    -webkit-appearance: none;
    background-image:linear-gradient(to right, #02C38A calc(var(--value)*1%), white 0);
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
    outline: none;
  }

  input[type=range]::-moz-range-track {
    -webkit-appearance: none;
    background-image:linear-gradient(to right, #02C38A calc(var(--value)*1%), white 0);
    height: 5px;
  }

  input[type=range]::-ms-track {
    background-color: white;
    height: 3px;
  }
`
