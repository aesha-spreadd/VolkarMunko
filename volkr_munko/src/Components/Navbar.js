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
} from '../Css/NavbarStyled';

import img from '../Assests/VmLogo_navbar.png';
import navbaricon from '../Assests/navbaricon.png';
import { FiAlignJustify } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div>
      <NavbarSection>
        <Container>
          <NavbarInner>
            <NavbarLeft>
              <LeftLogo>
                <img src={img} alt="VmLogo" />
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
