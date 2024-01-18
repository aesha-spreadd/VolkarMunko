import styled from 'styled-components';

export const FinanceSection = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const FinanceSectionInnerPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FianceLeftInner = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FianceHeading = styled.div`
  position: relative;
  max-width: 394px;
  width: 100%;
  height: 148px;
  margin: 68px 0 52px 20px;
  font-family: 'Quicksand-Bold';
  font-size: 50px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: -0.56px;
  text-align: left;
  color: #14183e;

  &::after {
    content: '';
    position: absolute;
    top: 78px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 79px;
    font-size: 30px;
    font-weight: bold;
    line-height: 42px;
    letter-spacing: -0.3px;
    margin: 68px 0 52px 16px;

    &::after {
      max-width: 288px;
      width: 100%;
      height: 46px;
      top: 42px;
    }
  }
`;

export const FianceDescription = styled.div`
  max-width: 500px;
  width: 100%;
  height: 86px;
  margin: 52px 0 66px 20px;
  font-family: 'Nunito-Regular';
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.18px;
  text-align: left;
  color: #37415c;

  @media (max-width: 768px) {
    height: 79px;
    margin: 0 7px 30px 14px;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.12px;
  }
`;

export const FianceButton = styled.div`
  max-width: 102px;
  width: 100%;
  margin: 96px 0 0 16px;
  padding: 14px 48px;
  border-radius: 10px;
  height: 22px;
  font-family: 'Nunito-Bold';
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.18px;
  text-align: left;
  color: #000;
  cursor: pointer;
  background: radial-gradient(#fff, #e6e6e6);

  &:hover {
    background: radial-gradient(#767678, #3b3b3c);
    color: #fff;
  }

  @media (max-width: 768px) {
    margin: 45px 0 0 16px;
  }
`;

export const FianceRightInner = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: -35px 0 0 0;
  }
`;

export const FianceRightMainHeading = styled.div`
  display: flex;
  justify-content: center;
  margin: 120px 0 0;
`;

export const HeadingDivider = styled.div`
  max-width: 49px;
  width: 100%;
  height: 0;
  margin: 20px 42px 0 0;
  border: solid 2px #3b3b3c;
`;

export const FianceRightHeading = styled.div`
  max-width: 263px;
  width: 100%;
  height: 36px;
  margin: 0 0 0 42px;
  font-family: 'Quicksand-Bold';
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  letter-spacing: -0.29px;
  text-align: left;
  color: #14183e;

  @media (max-width: 767px) {
    margin: 0;
  }
`;

export const FianceImagePortion = styled.div`
  max-width: 350px;
  width: 100%;
  height: 260px;
  margin: 26px 0 126px 74px;
  padding: 42px 34px 20px 16px;
  border-radius: 23px;
  border: solid 1px #cfcfcf;
  background-color: #fff;

  @media (max-width: 768px) {
    max-width: 450px;
    width: 100%;
    height: 330px;
    margin: 26px 38px 126px 36px;
    padding: 42px 4px 20px 6px;
  }

  @media (max-width: 567px) {
    max-width: 272px;
    margin: 50px 0 92px 20px;
  }
`;

export const FianceImages = styled.div`
  img {
    max-width: 96px;
    width: 100%;
    height: 151px;
    margin: 0 8px 42px 16px;
    object-fit: contain;
  }
`;

export const FianceImagesTwo = styled.div`
  img {
    max-width: 128px;
    width: 100%;
    height: 138px;
    margin: 10px 0 46px 46px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      max-width: 120px;
      width: 100%;
      height: 138px;
      margin: 10px 16px 46px 0;
    }
  }
`;

export const ImageDivider = styled.div`
  height: 141px;
  margin: 2px 0 48px;
  border: solid 1px #cfcfcf;
`;

export const FianceImageInner = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const RightInnerImageDescription = styled.div`
  max-width: 370px;
  width: 100%;
  height: 78px;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.16px;
  text-align: center;
  color: #707684;

  @media (max-width: 768px) {
    max-width: 400px;
    width: 100%;
    margin: 0 20px;
  }

  @media (max-width: 567px) {
    max-width: 200px;
    width: 100%;
  }
`;
