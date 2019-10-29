import React from 'react';
import InputBlock from './components/InputBlock';
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from './theme/GlobalStyle';
import styled from "styled-components"
import CalculatorContextProvider from './contexts/CalculatorContext';
import Display from "./components/Display"

const theme = {
  headerFont: 'Fascinate Inline',
  bodyFont: 'Open Sans',
  
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Appwrapper className="App">
        <header className="App-header">
          <h1>Calculator</h1>
        </header>
        <main>
          <CalculatorWrapper>
            <CalculatorContextProvider>
              <Display />
              <InputBlock />
            </CalculatorContextProvider>
          </CalculatorWrapper>

        </main>
      </Appwrapper>
    </ThemeProvider>
  );
}

export default App;

export const Appwrapper = styled.div`
text-align: center;
`

export const CalculatorWrapper=styled.div`
display: flex;
flex-direction: column;
width: 330px;
margin: 0 auto;
`