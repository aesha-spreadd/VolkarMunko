import React from 'react';
import {
  FooterBottomSection,
  Container,
  FooterBottomInnerPart,
  LeftInner,
  RightInner,
  CopyRightText,
  RightInnerUl,
  RightInnerLi,
  FooterText,
} from '../css/FooterBottomStyled';

const FooterBottom = () => {
  return (
    <>
      <FooterBottomSection>
        <Container>
          <FooterBottomInnerPart>
            <LeftInner>
              <CopyRightText>@2021 Volker Munko</CopyRightText>
            </LeftInner>
            <RightInner>
              <RightInnerUl>
                <RightInnerLi>
                  <FooterText>Data protection</FooterText>
                </RightInnerLi>
                <RightInnerLi>
                  <FooterText>imprint</FooterText>
                </RightInnerLi>
                <RightInnerLi>
                  <FooterText>Cookie Policy</FooterText>
                </RightInnerLi>
              </RightInnerUl>
            </RightInner>
          </FooterBottomInnerPart>
        </Container>
      </FooterBottomSection>
    </>
  );
};

export default FooterBottom;
