import React from 'react';
import VolkarMunko from '../assets/volkar-munko-footer.png';
import {
  FooterSection,
  FooterSectionInnerPart,
  FooterSectionLogo,
  FooterDescription,
  FooterTop,
} from '../css/FooterStyled';
import { Container } from '../GlobalStyles';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <div>
      <FooterSection>
        <FooterTop>
          <Container>
            <FooterSectionInnerPart>
              <FooterSectionLogo>
                <img src={VolkarMunko} alt="volkarmunko" />
              </FooterSectionLogo>
              <FooterDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </FooterDescription>
            </FooterSectionInnerPart>
          </Container>
        </FooterTop>
        <FooterBottom />
      </FooterSection>
    </div>
  );
};

export default Footer;
