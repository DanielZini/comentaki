import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

export default createGlobalStyle`

  body{
    background: ${colors.primary}
  }
  .full-container{
    padding-top: 5%
  }
  h1{
    text-align: center;
    color: #FFFFFF;
    margin: 0 0 30px 0;
  }
`;