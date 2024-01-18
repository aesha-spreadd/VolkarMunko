import styled from 'styled-components';

export const ContactSection = styled.div`
  padding: 140px 0;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftInnerPart = styled.div`
  max-width: 500px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    margin: 0 20px;
    max-width: 400px;
    width: 100%;
  }
`;

export const LeftInnerMap = styled.div`
  border-radius: 5px;
  overflow: hidden;

  img {
    max-width: 40px;
    width: 100%;
    height: 40px;
    background-color: #f1f3f4;
    position: absolute;
    top: 209px;
    right: 229px;
  }
`;

export const RightInnerPart = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 0 0 30px;

  @media (max-width: 768px) {
    margin: 20px 0 0 30px;
  }
`;

export const ContactArea = styled.div``;

export const ContactAreaHeading = styled.div`
  font-family: 'Quicksand-Bold';
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

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 0 0 0 30px;
  }
`;

export const ContactAreaCompanyName = styled.div`
  font-family: 'Quicksand-Bold';
  font-size: 50px;
  font-weight: bold;
  line-height: 70px;
  letter-spacing: -0.56px;
  color: #000;
  max-width: 565px;
  width: 100%;
  margin: 0 0 60px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    max-width: 427px;
    width: 100%;
    height: 68px;
    z-index: -1;
    background: linear-gradient(to bottom, #f8e9ed, #fbfbfb);
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;

    &::before {
      height: 40px;
      max-width: 300px;
      width: 100%;
    }
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
  @media (max-width: 768px) {
    img {
      max-width: 50px;
      width: 100%;
      height: 50px;
    }
  }
`;

export const ContactDetailsofIcon = styled.div`
  max-width: 384px;
  width: 100%;
  margin: 0 0 0 38px;
  font-family: 'Nunito-SemiBold';
  font-size: 20px;
  font-weight: 600;
  line-height: 34px;
  letter-spacing: -0.2px;
  text-align: left;
  color: #37415c;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
