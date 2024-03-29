import styled from 'styled-components';
import theme from '../theme';

export const AdvantagesSection = styled.div`
  padding: 200px 0;
  background: ${theme.white};

  @media (max-width: 991px) {
    padding: 100px 0;
  }
`;

export const AdvantagesInnerPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 24px;
  box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.1);
  max-height: 590px;
  height: auto;

  @media (max-width: 767px) {
    flex-direction: column;
    max-height: 800px;
  }
`;

export const AdvantageLeft = styled.div``;

export const AdvantageRight = styled.div`
  @media (max-width: 991px) {
    margin: 30px 0 0 50px;
  }
`;

export const LeftImage = styled.div`
  img {
    max-width: 500px;
    width: 100%;
    position: relative;
    top: -7px;

    @media (max-width: 767px) {
      max-width: 350px;
      width: 100%;
    }
  }
`;

export const AdvantagesContent = styled.div`
  margin: 0 50px 0 0;
`;

export const AdvantageHeading = styled.div`
  font-family: Quicksand-Bold;
  font-size: 51px;
  font-weight: bold;
  line-height: 72px;
  letter-spacing: -0.56px;
  color: ${theme.DarkBlue};
  max-width: 565px;
  width: 100%;
  margin: 0 0 20px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

    @media (max-width: 991px) {
      max-width: 230px;
      width: 100%;
      height: 30px;
    }
  }

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 30px;
    margin: 0 0 20px 0;
  }
`;

export const AdvantagesDescription = styled.div`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.18px;
  color: ${theme.PayneGrey};
  max-width: 565px;
  width: 100%;

  @media (max-width: 991px) {
    font-size: 12px;
    line-height: 22px;
  }
`;

export const AdvantageUlContent = styled.div`
  margin: 50px 0 0;
`;

export const AdvantageLiDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 24px 0;
`;

export const LiNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(#767678, #3b3b3c);
  max-width: 14px;
  width: 100%;
  height: 14px;
  border-radius: 50px;
  margin: 0 26px 0 0;
  padding: 10px;
  font-family: Nunito-Bold;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.18px;
  color: ${theme.white};

  @media (max-width: 991px) {
    font-size: 12px;
    max-width: 14px;
    width: 100%;
    height: 14px;
    margin: 0 16px 0 0;
  }
`;

export const LiContent = styled.div`
  font-family: Nunito-SemiBold;
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.18px;
  color: ${theme.LightBlue};

  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 24px;
  }
`;
