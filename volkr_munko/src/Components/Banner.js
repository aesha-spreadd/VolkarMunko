import React from 'react';
import {
  BannerSection,
  Container,
  BannerSectionInnerPart,
  BannerLeftInnerPart,
  BannerData,
  BannerRightInnerPart,
  RightInnerImage,
  BannerHeading,
  BannerDescription,
  BannerButton,
  BannerButtonHide,
} from '../css/BannerStyled';
import img from '../assests/Banner.png';
import Navbar from '../Components/Navbar';

const Banner = () => {
  return (
    <div>
      <Navbar />
      <BannerSection>
        <BannerSectionInnerPart>
          <Container>
            <BannerLeftInnerPart>
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
                  <img src={img} alt="bannerimg" />
                </RightInnerImage>
              </BannerData>
            </BannerLeftInnerPart>
            <BannerRightInnerPart>
              <BannerButtonHide>Contact Us</BannerButtonHide>
            </BannerRightInnerPart>
          </Container>
        </BannerSectionInnerPart>
      </BannerSection>
    </div>
  );
};

export default Banner;
