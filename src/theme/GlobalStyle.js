import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fascinate+Inline|Open+Sans|Turret+Road&&display=swap');
body{
  background:gray;
    padding: 0;
    margin: 0;
    font-family: ${props => props.theme.bodyFont};
    /* width: 100%; */
   /* box-sizing: border-box; */
}
`;
