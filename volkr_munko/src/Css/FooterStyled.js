import styled from 'styled-components';
import img from '../assests/Footer.png';

export const FooterSection = styled.div`
  background: url(${img}) no-repeat;
  background-position: center top;
  background-size: cover;
  max-height: 500px;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;

export const FooterSectionInnerPart = styled.div``;

export const FooterSectionLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 188px;
    width: 100%;
    height: 112px;
    margin: 0 588px 38px 588px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      max-width: 110px;
      width: 100%;
      height: 66px;
      margin: 0 132px 18px 130px;
      object-fit: contain;
    }
  }
`;

export const FooterDescription = styled.div`
  max-height: 57px;
  height: auto;
  margin: 0 112px;
  text-align: center;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  line-height: 36px;
  letter-spacing: -0.16px;
  color: #fff;

  @media (max-width: 768px) {
    height: 72px;
    margin: 0 20px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: -0.13px;
    text-align: center;
    color: #fff;
  }
`;

export const FooterTop = styled.div`
  padding: 124px 0 60px;
`;
