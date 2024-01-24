import React from 'react';
import {
  BannerSection,
  Container,
  BannerSectionInnerPart,
  BannerLeft,
  BannerData,
  BannerRight,
  RightInnerImage,
  BannerHeading,
  BannerDescription,
  BannerButton,
  BannerButtonHide,
} from '../css/BannerStyled';
import BannerImage from '../assets/banner.png';
import Navbar from '../Components/Navbar';

const Banner = () => {
  return (
    <div>
      <Navbar />
      <BannerSection>
        <BannerSectionInnerPart>
          <Container>
            <BannerLeft>
              <BannerData>
                <BannerHeading>Asset Management</BannerHeading>
                <BannerDescription>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </BannerDescription>
                <BannerButton>Contact Us</BannerButton>
                <RightInnerImage>
                  <img src={BannerImage} alt="banner" />
                </RightInnerImage>
              </BannerData>
            </BannerLeft>
            <BannerRight>
              <BannerButtonHide>Contact Us</BannerButtonHide>
            </BannerRight>
          </Container>
        </BannerSectionInnerPart>
      </BannerSection>
    </div>
  );
};

export default Banner;
