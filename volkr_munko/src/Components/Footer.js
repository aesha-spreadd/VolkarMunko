import React from 'react';
import img from '../Assests/VM_LOGO.png';
import {
  FooterSection,
  Container,
  FooterSectionInnerPart,
  FooterSectionLogo,
  FooterDescription,
  FooterInnerDivider,
  FooterCopyRight,
  CopyRightText,
  CopyRightList,
  CopyRightData,
  CopyRightDataDivider,
} from '../Css/FooterStyled';

const Footer = () => {
  return (
    <div>
      <FooterSection>
        <Container>
          <FooterSectionInnerPart>
            <FooterSectionLogo>
              <img src={img} alt="Vmlogo" />
            </FooterSectionLogo>
            <FooterDescription>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters
            </FooterDescription>
            <FooterInnerDivider />
            <FooterCopyRight>
              <CopyRightText>@2020 Volker Munko</CopyRightText>
              <CopyRightList>
                <CopyRightData>Privacy policy</CopyRightData>
                <CopyRightDataDivider />
                <CopyRightData>Imprint</CopyRightData>
                <CopyRightDataDivider />
                <CopyRightData>Cookie Policy</CopyRightData>
              </CopyRightList>
            </FooterCopyRight>
          </FooterSectionInnerPart>
        </Container>
      </FooterSection>
    </div>
  );
};

export default Footer;
