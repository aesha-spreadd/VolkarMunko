import styled from 'styled-components';

export const NavbarSection = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 9;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1088px;
  margin: 0 auto;
`;

export const NavbarInner = styled.div`
  padding: 50px 0;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarLeft = styled.div``;

export const LeftLogo = styled.div`
  margin: 0 36px;

  @media (max-width: 992px) {
    margin: 0;

    img {
      max-width: 110px;
      width: 100%;
      height: 70px;
    }
  }
`;

export const NavbarRight = styled.div`
  display: flex;
`;

export const MenuMobileHide = styled.div`
  display: flex;
`;

export const UlMenuMobileHide = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const MenuLi = styled.div`
  max-width: 120px;
  width: 100%;
  font-family: 'Nunito-SemiBold';
  font-size: 20px;
  font-weight: 600;
  line-height: 13px;
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

  &:hover {
    background: #fff;
    color: #000;
  }
`;

export const MobileOpen = styled.div`
  margin: 0 30px 0 0;
  display: none;

  @media (max-width: 992px) {
    display: block;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;
