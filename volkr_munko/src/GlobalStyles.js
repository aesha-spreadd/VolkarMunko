import styled, { createGlobalStyle } from 'styled-components';
import NunitoBlack from './font/Nunito/static/Nunito-Black.ttf';
import NunitoBold from './font/Nunito/static/Nunito-Bold.ttf';
import NunitoRegular from './font/Nunito/static/Nunito-Regular.ttf';
import NunitoLight from './font/Nunito/static/Nunito-Light.ttf';
import NunitoSemiBold from './font/Nunito/static/Nunito-SemiBold.ttf';
import NunitoMedium from './font/Nunito/static/Nunito-Medium.ttf';
import QuicksandBold from './font/Quicksand/Quicksand_Bold.otf';
import QuicksandLight from './font/Quicksand/Quicksand_Light.otf';
import theme from './theme';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 4px;
    padding: 0;
    background: ${theme.white};
    overflow-x: hidden;
  }
    @font-face {
    font-family: 'Nunito-Black';
    src: url(${NunitoBlack}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito-Bold';
    src: url(${NunitoBold}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito-Regular';
    src: url(${NunitoRegular}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito-Light';
    src: url(${NunitoLight}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito-SemiBold';
    src: url(${NunitoSemiBold}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Nunito-Medium';
    src: url(${NunitoMedium}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Quicksand-Bold';
    src: url(${QuicksandBold}) format('truetype');
    font-style: normal;
  }
  @font-face {
    font-family: 'Quicksand-Light';
    src: url(${QuicksandLight}) format('truetype');
    font-style: normal;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;
