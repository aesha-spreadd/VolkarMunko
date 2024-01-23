import styled from 'styled-components';

export const NavbarSection = styled.div`
  padding: 30px 0 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;

  @media (max-width: 991px) {
    padding: 10px 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;

export const NavbarInner = styled.div`
  padding: 10px 0;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 991px) {
    padding: 10px 0;
  }
`;

export const NavbarLeft = styled.div``;

export const LeftLogo = styled.div`
  margin: 0 36px;

  @media (max-width: 991px) {
    margin: 0 14px 0;

    img {
      max-width: 70%;
      width: 100%;
    }
  }
`;

export const NavbarRight = styled.div`
  display: flex;

  @media (max-width: 1199px) {
    margin: 0 30px 0 0;
  }

  @media (max-width: 991px) {
    margin: 0 10px 0 0;
  }
`;

export const MenuMobileHide = styled.div`
  display: flex;
`;

export const UlMenuMobileHide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const MenuLi = styled.div`
  max-width: 120px;
  width: 100%;
  font-family: 'Nunito-SemiBold';
  font-size: 18px;
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.2px;
  color: #686868;
  margin: 0 30px 0 0;
  white-space: nowrap;
`;

export const MobileHideButton = styled.div`
  font-family: 'Nunito-Bold';
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.16px;
  color: #676768;
  width: 100%;
  border-radius: 10px;
  padding: 12px 26px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: radial-gradient(#767678, #3b3b3c);
    color: #ffffff;
  }
`;

export const MobileOpen = styled.div`
  margin: 0 10px 0 0;
  display: none;

  @media (max-width: 991px) {
    display: flex;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
