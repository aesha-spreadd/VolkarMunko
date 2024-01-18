import styled from 'styled-components';
import img from '../Assests/Footer.png';

export const FooterSection = styled.div`
  background: url(${img}) no-repeat;
  background-position: center top;
  background-size: cover;
  max-height: 334px;
  height: auto;
  padding: 126px 0 34px;
  object-fit: contain;
  width: 100%;
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

export const FooterInnerDivider = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 0;
  margin: 68px 0 0 -32px;
  border: solid 1px rgba(255, 255, 255, 0.23);
`;

export const FooterCopyRight = styled.div`
  display: flex;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CopyRightText = styled.div`
  width: 100%;
  height: 22px;
  margin: 0 0 0 70px;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #eee;

  @media (max-width: 768px) {
    margin: 0 0 0 20px;
  }
`;

export const CopyRightList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin: 0 0 0 20px;
  }
`;

export const CopyRightData = styled.div`
  height: 22px;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #eee;
`;

export const CopyRightDataDivider = styled.div`
  height: 20px;
  margin: 0 8px 0;
  border: solid 1px #5d5d5d;
`;
