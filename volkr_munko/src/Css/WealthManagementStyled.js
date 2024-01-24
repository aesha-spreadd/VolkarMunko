import styled from 'styled-components';
import HouseProtection from '../assets/houseProtection.png';
import BGWealthManagement from '../assets/bg-wealthmanagement.png';

export const WealthManagementSection = styled.div`
  background: url(${BGWealthManagement}) no-repeat;
  background-size: cover;
  background-position: center top;
  position: relative;

  &::before {
    content: '';
    background: url(${HouseProtection}) no-repeat;
    max-width: 560px;
    width: 100%;
    height: 620px;
    background-size: 560px 620px;
    position: absolute;
    right: 0;
    top: 167px;
    background-position: center top;

    @media (max-width: 991px) {
      max-width: 270px;
      width: 100%;
      height: 290px;
      background-size: 270px 290px;
      top: 230px;
    }

    @media (max-width: 575px) {
      top: 206px;
    }
  }

  @media (max-width: 991px) {
    height: auto;
    max-height: 1800px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;

export const WealthManagementInnerPart = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const WealthManagementLeft = styled.div`
  max-width: 530px;
  width: 100%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const WealthManagementRight = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 0 0 30px;

  @media (max-width: 991px) {
    margin: 0;
  }
`;

export const WealthManagementLeftData = styled.div`
  @media (max-width: 767px) {
    margin: 0 10px;
  }
`;

export const WealthManagementRightData = styled.div`
  height: 1116px;
  display: flex;
  justify-content: end;
  align-items: end;

  @media (max-width: 1199px) {
    height: 950px;
  }

  @media (max-width: 991px) {
    justify-content: start;
    align-items: start;
    height: auto;
  }
`;

export const WealthManagementHeading = styled.div`
  font-family: Quicksand-Bold;
  font-size: 51px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: -0.51px;
  color: #ffffff;
  max-width: 565px;
  width: 100%;
  margin: 0 0 100px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -50px;
    height: 5px;
    max-width: 190px;
    width: 100%;
    background: #ffffff;

    @media (max-width: 991px) {
      max-width: 95px;
      width: 100%;
      height: 3px;
      bottom: -30px;
    }
  }

  @media (max-width: 991px) {
    font-size: 22px;
    line-height: 34px;
    margin: 0 0 30px 0;
    max-width: 450px;
    width: 100%;
  }

  @media (max-width: 1199px) {
    margin: 0 0 30px 10px;
  }

  @media (max-width: 767px) {
    max-width: 350px;
    width: 100%;
  }
`;

export const WealthManagementContent = styled.div`
  @media (max-width: 1199px) {
    margin: 100px 10px 0;

    @media (max-width: 575px) {
      margin: 300px 10px 0;
    }
  }
`;

export const WealthManagementLiDetails = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 490px;
  width: 100%;

  @media (max-width: 991px) {
    margin: 0 10px 0 0;
  }
`;

export const WealthManagementIcon = styled.div`
  img {
    max-width: 36px;
    width: 100%;
  }
`;

export const WealthManagementDescription = styled.div`
  width: 100%;
  margin: 0 0 30px 32px;
  font-family: Nunito-Regular;
  font-size: 20px;
  font-weight: 400;
  line-height: 35px;
  letter-spacing: -0.2px;
  text-align: left;
  color: #fff;

  @media (max-width: 1199px) {
    font-size: 14px;
    line-height: 25px;
    width: 100%;
  }
`;

export const WealthManagementRightContent = styled.div`
  @media (max-width: 991px) {
    margin: 10px 0 0;
    width: 100%;
  }

  @media (max-width: 991px) {
    margin: 0 10px 0;
  }
`;
