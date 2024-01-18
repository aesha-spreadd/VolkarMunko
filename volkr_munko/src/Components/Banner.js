import React from 'react';
import {
  BannerSection,
  Container,
  BannerSectionInnerPart,
  BannerLeftInnerPart,
  BannerRightInnerPart,
  RightInnerImage,
  BannerHeading,
  BannerDescription,
  BannerButton,
  BannerButtonHide,
} from '../Css/BannerStyled';
import img from '../Assests/Banner.png';
import Navbar from '../Components/Navbar';

const Banner = () => {
  return (
    <div>
      <Navbar />
      <BannerSection>
        <Container>
          <BannerSectionInnerPart>
            <BannerLeftInnerPart>
              <BannerHeading>Asset Management</BannerHeading>
              <BannerDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution
              </BannerDescription>
              <BannerButton>Contact Us</BannerButton>
            </BannerLeftInnerPart>
            <BannerRightInnerPart>
              <RightInnerImage>
                <img src={img} alt="bannerimg" />
              </RightInnerImage>
              <BannerButtonHide>Contact Us</BannerButtonHide>
            </BannerRightInnerPart>
          </BannerSectionInnerPart>
        </Container>
      </BannerSection>
    </div>
  );
};

export default Banner;
