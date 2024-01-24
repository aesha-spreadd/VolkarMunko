import styled from 'styled-components';
import footerBg from '../assets/bg-footer.png';

export const FooterSection = styled.div`
  background: url(${footerBg}) no-repeat;
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
    margin: 0 0 38px;

    @media (max-width: 767px) {
      max-width: 110px;
      width: 100%;
      height: 66px;
    }
  }
`;

export const FooterDescription = styled.div`
  max-height: 57px;
  height: auto;
  margin: 0 100px;
  text-align: center;
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 36px;
  letter-spacing: -0.16px;
  color: #fff;

  @media (max-width: 767px) {
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
  padding: 90px 0;
`;
