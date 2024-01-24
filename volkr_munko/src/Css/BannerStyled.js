import styled from 'styled-components';
import banner from '../assets/banner.png';

export const BannerSection = styled.div`
  overflow: hidden;
  margin: 20px;
  position: relative;
  padding: 124px 0 30px;
  background: linear-gradient(180deg, #f8f8f8, #fff);

  @media (max-width: 991px) {
    margin: 10px;
    padding: 50px 0 50px;
  }
`;

export const BannerSectionInnerPart = styled.div`
  background: url(${banner}) no-repeat;
  background-size: 660px 640px;
  background-position: right 20px bottom 10px;
  height: 650px;

  @media (max-width: 991px) {
    background: none;
    height: auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 991px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const BannerLeft = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const BannerHeading = styled.div`
  position: relative;
  max-width: 565px;
  width: 100%;
  margin: 60px 0 40px;
  font-family: Quicksand-Bold;
  font-size: 54px;
  font-weight: bold;
  line-height: 79px;
  letter-spacing: -0.56px;
  text-align: left;
  color: #14183e;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 1px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

    @media (max-width: 991px) {
      max-width: 368px;
      width: 100%;
      top: 12px;
    }
  }

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 79px;
    margin: 40px 0 0 0;
    height: auto;
  }
`;

export const BannerDescription = styled.div`
  max-width: 565px;
  width: 100%;
  margin: 0 0 40px 0;
  font-family: Nunito-Regular;
  font-size: 18px;
  line-height: 31px;
  letter-spacing: -0.18px;
  color: #37415c;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 21px;
    font-weight: 400;
    letter-spacing: -0.12px;
  }
`;

export const BannerButton = styled.div`
  max-width: 92px;
  width: 100%;
  padding: 14px 48px;
  border-radius: 10px;
  height: 22px;
  font-family: Nunito-Regular;
  font-size: 18px;
  line-height: 10px;
  font-weight: 400;
  letter-spacing: -0.18px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: radial-gradient(#767678, #3b3b3c);
  cursor: pointer;

  &:hover {
    background: #3b3b3c;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const BannerRight = styled.div`
  max-width: 48%;
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const BannerButtonHide = styled.div`
  display: none;

  @media (max-width: 991px) {
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 186px;
    width: 100%;
    max-height: 50px;
    height: auto;
    padding: 0 28px;
    border-radius: 10px;
    font-family: Nunito-Regular;
    font-size: 14px;
    font-weight: 500;
    line-height: 62px;
    letter-spacing: -0.14px;
    text-align: left;
    color: #fff;
    background: radial-gradient(#767678, #3b3b3c);
    cursor: pointer;

    &:hover {
      background: #3b3b3c;
    }
  }
`;

export const RightInnerImage = styled.div`
  display: none;

  @media (max-width: 991px) {
    display: block;
    width: 100%;

    img {
      width: 100%;
      max-width: 600px;
      margin: 30px 0 0;
    }
  }
`;

export const BannerData = styled.div`
  margin: 0 10px;
`;
