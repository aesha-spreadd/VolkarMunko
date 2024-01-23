import styled from 'styled-components';

export const FinanceSection = styled.div`
  display: block;
  background: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;

export const FinanceSectionInnerPart = styled.div`
  padding: 50px 0 100px;
  margin: 0 0 52px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const FinanceLeftInner = styled.div`
  @media (max-width: 991px) {
    margin: 0 20px;
  }
`;

export const FinanceHeading = styled.div`
  position: relative;
  max-width: 565px;
  width: 100%;
  margin: 0 0 40px;
  font-family: 'Quicksand-Bold';
  font-size: 51px;
  font-weight: bold;
  line-height: 72px;
  letter-spacing: -0.56px;
  text-align: left;
  text-transform: uppercase;
  color: #14183e;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media (max-width: 991px) {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    line-height: 31px;
    letter-spacing: -0.3px;

    &::after {
      max-width: 288px;
      width: 100%;
      height: 46px;
      top: -12px;
    }
  }
`;

export const FinanceDescription = styled.div`
  max-width: 565px;
  width: 100%;
  font-family: 'Nunito-Regular';
  font-size: 18px;
  line-height: 31px;
  letter-spacing: -0.18px;
  color: #37415c;

  @media (max-width: 991px) {
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -0.12px;
  }
`;

export const FinanceButton = styled.div`
  position: relative;
  width: 100%;
  max-width: 210px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin: 50px 0 20px;
  padding: 10px 20px;
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

  @media (max-width: 991px) {
    margin: 46px 0 0 0;
  }
`;

export const FinanceRightInner = styled.div`
  @media (max-width: 991px) {
    margin: 0 20px;
  }
`;

export const FinanceRightMainHeading = styled.div`
  max-width: 440px;
  width: 100%;

  @media (max-width: 1199px) {
    max-width: 400px;
    width: 100%;
  }
`;

export const FinanceRightHeading = styled.div`
  position: relative;
  padding: 0 0 0 70px;
  margin: 0 0 40px 0;
  font-family: 'Quicksand-Bold';
  font-size: 29px;
  font-weight: bold;
  line-height: 44px;
  letter-spacing: -0.29px;
  text-align: left;
  color: #14183e;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    width: 50px;
    background: #3b3b3c;
  }

  @media (max-width: 991px) {
    font-size: 17px;
    margin: 40px 0 20px;
    padding: 0 0 0 50px;

    &::before {
      width: 30px;
    }
  }
`;

export const FinanceImagePortion = styled.div`
  padding: 40px;
  border-radius: 23px;
  border: solid 1px #cfcfcf;

  @media (max-width: 1199px) {
    padding: 20px;
    margin: 0 40px 0 0;
  }
`;

export const FinanceImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
  }
`;

export const FinanceImagesTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
  }
`;

export const ImageDivider = styled.div`
  width: 1px;
  height: 130px;
  margin: 0 30px;
  background: #cfcfcf;
`;

export const FinanceImageInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightInnerImageDescription = styled.div`
  margin: 40px 0 0;
  max-width: 350px;
  width: 100%;
  font-family: 'Nunito-Regular';
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.16px;
  text-align: center;
  color: #707684;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 21px;
  }
`;
