import styled from 'styled-components';

export const ContactSection = styled.div`
  padding: 140px 0;

  @media (max-width: 991px) {
    padding: 50px 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;

export const ContactSectionInnerPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const LeftInner = styled.div`
  max-width: 500px;
  width: 100%;
  position: relative;

  @media (max-width: 991px) {
    max-width: 550px;
    width: 100%;
  }
`;

export const LeftInnerMap = styled.div`
  overflow: hidden;

  iframe {
    border-radius: 22px;
    border-color: #f8f9fa;

    @media (max-width: 575px) {
      max-width: 290px;
      width: 100%;
    }
  }

  img {
    max-width: 40px;
    width: 100%;
    height: 40px;
    position: absolute;
    top: 214px;
    right: 238px;

    @media (max-width: 991px) {
      top: 214px;
      right: 288px;
    }

    @media (max-width: 575px) {
      top: 215px;
      right: 160px;
    }
  }
`;

export const RightInner = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 0 0 30px;

  @media (max-width: 991px) {
    margin: 20px 0 0;
  }
`;

export const ContactArea = styled.div``;

export const ContactAreaHeading = styled.div`
  font-family: Quicksand-Bold;
  font-size: 22px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.29px;
  color: #000;
  position: relative;
  padding: 0 0 0 50px;
  margin: 0 0 20px 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    height: 2px;
    max-width: 22px;
    width: 100%;
    background: #000;
  }

  @media (max-width: 991px) {
    font-size: 18px;
    padding: 0 0 0 30px;
    max-width: 230px;
    width: 100%;
  }
`;

export const ContactAreaCompanyName = styled.div`
  font-family: Quicksand-Bold;
  font-size: 51px;
  font-weight: bold;
  line-height: 72px;
  letter-spacing: -0.56px;
  color: #14183e;
  width: 100%;
  margin: 0 0 60px;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    height: 68px;
    z-index: -1;
    background-position: center center;
    max-width: 330px;
    width: 100%;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);

    @media (max-width: 991px) {
      height: 40px;
      max-width: 230px;
      width: 100%;
    }
  }

  @media (max-width: 991px) {
    font-size: 24px;
    line-height: 32px;
    max-width: 230px;
    width: 100%;
  }
`;

export const ContactDetails = styled.div``;

export const ContactContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 0 40px;
`;

export const ContactIcon = styled.div`
  img {
    @media (max-width: 991px) {
      max-width: 40px;
      width: 100%;
      max-height: 40px;
    }
  }
`;

export const ContactDetailsOfIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 38px;
  font-family: Nunito-SemiBold;
  font-size: 20px;
  font-weight: 600;
  line-height: 35px;
  letter-spacing: -0.2px;
  text-align: left;
  color: #37415c;

  a {
    text-decoration: none;
    color: #37415c;
  }

  @media (max-width: 991px) {
    font-size: 14px;
    max-width: 240px;
    width: 100%;
  }
`;

export const MapContent = styled.div`
  position: relative;
`;
