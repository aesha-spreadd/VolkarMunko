import React from 'react';
import {
  NavbarSection,
  Container,
  NavbarLeft,
  NavbarRight,
  NavbarInner,
  LeftLogo,
  MenuMobileHide,
  UlMenuMobileHide,
  MenuLi,
  MobileHideButton,
  MobileOpen,
} from '../css/NavbarStyled';
import navbarLogo from '../assets/vmLogo_navbar.png';
import { FiAlignJustify } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div>
      <NavbarSection>
        <Container>
          <NavbarInner>
            <NavbarLeft>
              <LeftLogo>
                <img src={navbarLogo} alt="volkarmunko-logo" />
              </LeftLogo>
            </NavbarLeft>
            <NavbarRight>
              <MenuMobileHide>
                <UlMenuMobileHide>
                  <MenuLi>Why Us</MenuLi>
                  <MenuLi>About Us</MenuLi>
                  <MobileHideButton>Contact</MobileHideButton>
                </UlMenuMobileHide>
                <MobileOpen>
                  <FiAlignJustify />
                </MobileOpen>
              </MenuMobileHide>
            </NavbarRight>
          </NavbarInner>
        </Container>
      </NavbarSection>
    </div>
  );
};

export default Navbar;
