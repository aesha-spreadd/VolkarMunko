import styled from 'styled-components';

export const BannerSection = styled.div`
  overflow: hidden;
  padding: 100px 0 50px;

  @media (max-width: 991px) {
    padding: 150px 0 50px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    justify-content: flex-start;
  }
`;

export const BannerSectionInnerPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const BannerLeftInnerPart = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

export const BannerHeading = styled.div`
  position: relative;
  max-width: 352px;
  width: 100%;
  height: 148px;
  margin: 68px 0 52px 20px;
  font-family: 'Quicksand-Bold';
  font-size: 56px;
  font-weight: bold;
  line-height: 80px;
  letter-spacing: -0.56px;
  text-align: left;
  color: #14183e;

  &::after {
    content: '';
    position: absolute;
    top: 80px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media (max-width: 991px) {
    &::after {
      max-width: 368px;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 79px;
    margin: 0 106px 0 0;
    font-size: 30px;
    font-weight: bold;
    line-height: 42px;
    letter-spacing: -0.3px;

    &::after {
      max-width: 288px;
      width: 100%;
      height: 46px;
      top: 42px;
    }
  }
`;

export const BannerDescription = styled.div`
  max-width: 480px;
  width: 100%;
  height: 86px;
  margin: 52px 0 66px 20px;
  font-family: Nunito;
  font-size: 18px;
  line-height: 30px;
  letter-spacing: -0.18px;
  text-align: left;
  color: #37415c;

  @media (max-width: 767px) {
    width: 100%;
    height: 79px;
    margin: 38px 12px 0 8px;
    font-size: 12px;
    line-height: 28px;
    letter-spacing: -0.12px;
  }
`;

export const BannerButton = styled.div`
  max-width: 92px;
  width: 100%;
  margin: 66px 0 0 20px;
  padding: 14px 48px;
  border-radius: 10px;
  height: 22px;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.18px;
  text-align: left;
  color: #fff;
  background: radial-gradient(#767678, #3b3b3c);
  cursor: pointer;

  &:hover {
    background: #3b3b3c;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const BannerRightInnerPart = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightInnerImage = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 126px 0 0;
  object-fit: contain;

  img {
    max-width: 550px;
    width: 100%;
  }

  @media (max-width: 991px) {
    img {
      max-width: 400px;
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    margin: 0;
    justify-content: center;

    img {
      max-width: 300px;
      width: 100%;
    }
  }
`;

export const BannerButtonHide = styled.div`
  display: none;

  @media (max-width: 767px) {
    margin: 10px 0 0 -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 186px;
    width: 100%;
    height: 49px;
    padding: 0 28px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 62px;
    letter-spacing: -0.14px;
    text-align: left;
    color: #fff;
    background-color: radial-gradient(#767678, #3b3b3c);
  }
`;
