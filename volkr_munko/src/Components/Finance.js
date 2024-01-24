import React from 'react';
import {
  FinanceLeft,
  FinanceRight,
  FinanceSection,
  FinanceSectionInnerPart,
  Container,
  FinanceHeading,
  FinanceDescription,
  FinanceButton,
  FinanceRightMainHeading,
  FinanceRightHeading,
  FinanceImagePortion,
  FinanceImages,
  FinanceImagesTwo,
  ImageDivider,
  FinanceImageInner,
  RightInnerImageDescription,
} from '../css/FinanceStyled';
import Handelsblatt from '../assets/fianceImage.jpg';
import Exzellent from '../assets/fianceImageExzellent.jpg';

const Finance = () => {
  return (
    <div>
      <FinanceSection>
        <Container>
          <FinanceSectionInnerPart>
            <FinanceLeft>
              <FinanceHeading>Competence for your finances</FinanceHeading>
              <FinanceDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </FinanceDescription>
              <FinanceButton>Contact Us</FinanceButton>
            </FinanceLeft>
            <FinanceRight>
              <FinanceRightMainHeading>
                <FinanceRightHeading> EXCELLENT ADVICE</FinanceRightHeading>
              </FinanceRightMainHeading>
              <FinanceImagePortion>
                <FinanceImageInner>
                  <FinanceImages>
                    <img src={Handelsblatt} alt="finance" />
                  </FinanceImages>
                  <ImageDivider />
                  <FinanceImagesTwo>
                    <img src={Exzellent} alt="finance" />
                  </FinanceImagesTwo>
                </FinanceImageInner>
                <RightInnerImageDescription>
                  We are regularly recognized by independent institutes for our
                  quality in customer advice and service.
                </RightInnerImageDescription>
              </FinanceImagePortion>
            </FinanceRight>
          </FinanceSectionInnerPart>
        </Container>
      </FinanceSection>
    </div>
  );
};

export default Finance;
