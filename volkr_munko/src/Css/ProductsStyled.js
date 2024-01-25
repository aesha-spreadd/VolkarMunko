import styled from 'styled-components';
import productBg from '../assets/bg-product.png';
import productFooterBg from '../assets/bg-productfooter.png';
import theme from '../theme';

export const ProductSection = styled.div`
  background: #fbfbfb;
  padding: 80px 0 20px;
  margin: 0 0 100px 0;
  display: flex;
  position: relative;

  &::before {
    content: '';
    background: url(${productBg}) no-repeat;
    height: 100px;
    width: 100%;
    background-size: 100%;
    background-position: center top;
    position: absolute;
    top: -78px;
    z-index: 1;

    @media (max-width: 575px) {
      top: -42px;
    }
  }

  @media (max-width: 991px) {
    padding: 30px 0 40px;
  }
`;

export const ProductsInner = styled.div`
  &::after {
    content: '';
    background: url(${productFooterBg}) no-repeat;
    height: 158px;
    width: 100%;
    background-position: center bottom;
    background-size: 100% auto;
    position: absolute;
    bottom: -150px;
    left: 0;
    z-index: 1;

    @media (max-width: 767px) {
      height: 200px;
      bottom: -38px;
      left: 0;
      z-index: -1;
    }
  }

  @media (max-width: 1199px) {
    padding: 0 20px;
  }
`;

export const ProductHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductMainHeading = styled.div`
  font-family: Quicksand-Bold;
  font-size: 52px;
  font-weight: bold;
  line-height: 76px;
  letter-spacing: -0.17px;
  color: ${theme.DarkBlue};
  margin: 0 0 30px 0;

  @media (max-width: 767px) {
    font-size: 22px;
  }
`;

export const ProductDescription = styled.div`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: -0.17px;
  color: ${theme.Nero};
  text-align: center;
  margin: 0 0 40px 0;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const ProductButtons = styled.div`
  display: flex;
  max-width: 640px;
  width: 100%;
  height: 72px;
  margin: 30px 0;
  padding: 0 66px 0 0;
  border-radius: 36px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
  border: 1px solid ${theme.AmourPink};
  background-color: ${theme.white};

  @media (max-width: 1199px) {
    margin: 0;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const PrivateCustomerButton = styled.div`
  max-width: 262px;
  width: 100%;
  height: 72px;
  margin: 0 60px 0 0;
  padding: 0 40px 0 72px;
  border-radius: 36px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.03);
  z-index: 1;
  background-color: ${theme.PayneLightGrey};
`;

export const PrivateCustomerButtonText = styled.div`
  max-width: 500px;
  width: 100%;
  height: 26px;
  margin: -6px 0 0 13px;
  font-family: Quicksand-Bold;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.21px;
  text-align: center;
  color: ${theme.white};
  z-index: 1;
`;

export const PrivateCustomerButtonIcon = styled.div`
  max-width: 30px;
  width: 100%;
  height: 30px;

  img {
    margin: 20px 0 0 0;
  }
`;

export const PrivateGroupButton = styled.div``;

export const GroupButtonIcon = styled.div`
  max-width: 20px;
  width: 100%;
  height: 24px;
  margin: 0 28px 0 0;

  img {
    margin: 20px 0 0 0;
  }
`;

export const GroupButtonText = styled.div`
  max-width: 500px;
  width: 100%;
  height: 26px;
  margin: -4px 0 0 28px;
  font-family: Quicksand-Bold;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: -0.21px;
  text-align: center;
  color: ${theme.DarkBlue};
`;

export const ProductsInnerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1199px) {
    justify-content: space-around;
  }

  @media (max-width: 767px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const ProductInnerCardDetails = styled.div`
  max-width: 337px;
  width: 100%;
  height: 466px;
  padding: 10px;
  position: relative;
  border-radius: 20px;
  border: 1px solid ${theme.WhisperWhite};
  background-color: ${theme.white};
  margin: 30px 0 0 -28px;
  transition: transform 0.5s;
  transform-style: preserve-3d;

  &:hover {
    transform: rotateY(180deg);
    background-color: ${theme.PayneDarkGrey};
    height: 450px;
  }

  @media (max-width: 991px) {
    margin: 30px 0 0 -5px;
    max-width: 300px;
    width: 100%;
  }
`;

export const FrontCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`;

export const BackCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.PayneDarkGrey};
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  border-radius: 20px;
  margin: -10px 0 0 0;
`;

export const ProductCardIButton = styled.div`
  position: absolute;
  top: 11px;
  left: 312px;
  transform: translateX(-50%);

  img {
    max-width: 30px;
    width: 100%;
    height: 30px;
  }

  @media (max-width: 991px) {
    left: 278px;
  }
`;

export const ProductCardIcon = styled.div`
  max-width: 136px;
  width: 100%;
  height: 138px;
  margin: 18px 32px 42px -10px;
`;

export const ProductCardText = styled.div`
  max-width: 268px;
  width: 100%;
  height: 101px;
  margin: 44px 0 46px 0;
  font-family: Quicksand-Bold;
  font-size: 26px;
  font-weight: bold;
  line-height: 34px;
  letter-spacing: -0.26px;
  text-align: center;
  color: ${theme.DarkBlue};

  @media (max-width: 767px) {
    margin: 44px 10px 46px 0;
  }
`;

export const ProductCardButton = styled.div`
  max-width: 188px;
  width: 100%;
  height: 50px;
  margin: 50px;
  border-radius: 10px;
  font-family: Quicksand-Bold;
  font-size: 16px;
  font-weight: bold;
  line-height: 80px;
  text-align: left;
  color: ${theme.DarkBlue};
  background-color: ${theme.WhisperWhite};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductBackDescription = styled.div`
  max-width: 274px;
  width: 100%;
  max-height: 450px;
  height: auto;
  padding: 50px 26px 10px 20px;
  font-family: Nunito-Regular;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.14px;
  text-align: left;
  color: ${theme.white};
`;

export const ProductCardIButtonBackCard = styled.div`
  position: absolute;
  top: 18px;
  left: 326px;
  transform: translateX(-50%);

  img {
    max-width: 30px;
    width: 100%;
    height: 30px;
  }

  @media (max-width: 991px) {
    left: 278px;
  }
`;
