import styled, { createGlobalStyle } from 'styled-components';
import BackGroundImage from './resource/images/back-ground.jpg';


export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${BackGroundImage});
    background-size: cover;
    margin:0;
    padding: 0 20px;
    display:flex;
    justify-content: center;
}

* {
    box-sizing: border-box,
    font-family: 'Catamaran', sans-serif;
}
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;

    > p {
        color: #fff;
    }

     h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next, .submit {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }

  .input {
      padding:0.5px;
      margin:0.5px;
    border: 2px solid #d38568;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    width: 80%;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: red;
    }
    : -ms-input-placeholder {
        color:red;
    }
  }
`