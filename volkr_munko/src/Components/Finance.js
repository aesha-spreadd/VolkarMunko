import React from 'react';
import {
  FianceLeftInner,
  FianceRightInner,
  FinanceSection,
  FinanceSectionInnerPart,
  Container,
  FianceHeading,
  FianceDescription,
  FianceButton,
  FianceRightMainHeading,
  FianceRightHeading,
  HeadingDivider,
  FianceImagePortion,
  FianceImages,
  FianceImagesTwo,
  ImageDivider,
  FianceImageInner,
  RightInnerImageDescription,
} from '../Css/FinanceStyled';

import img from '../Assests/FianceImage.jpg';
import imgtwo from '../Assests/FianceImageTwo.jpg';

const Finance = () => {
  return (
    <div>
      <FinanceSection>
        <Container>
          <FinanceSectionInnerPart>
            <FianceLeftInner>
              <FianceHeading>Competence for your finances</FianceHeading>
              <FianceDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English
              </FianceDescription>
              <FianceButton>Contact Us</FianceButton>
            </FianceLeftInner>
            <FianceRightInner>
              <FianceRightMainHeading>
                <HeadingDivider />
                <FianceRightHeading> EXCELLENT ADVICE</FianceRightHeading>
              </FianceRightMainHeading>
              <FianceImagePortion>
                <FianceImageInner>
                  <FianceImages>
                    <img src={img} alt="fianceimage" />
                  </FianceImages>
                  <ImageDivider />
                  <FianceImagesTwo>
                    <img src={imgtwo} alt="fianceimage" />
                  </FianceImagesTwo>
                </FianceImageInner>
                <RightInnerImageDescription>
                  We are regularly recognized by independent institutes for our
                  quality in customer advice and service.
                </RightInnerImageDescription>
              </FianceImagePortion>
            </FianceRightInner>
          </FinanceSectionInnerPart>
        </Container>
      </FinanceSection>
    </div>
  );
};

export default Finance;
