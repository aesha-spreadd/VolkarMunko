import React from 'react';
import {
  BannerSection,
  BannerSectionInnerPart,
  BannerLeft,
  BannerData,
  BannerRight,
  RightInnerImage,
  BannerHeading,
  BannerDescription,
  BannerButton,
  BannerButtonHide,
  BannerInnerData,
} from '../css/BannerStyled';
import BannerImage from '../assets/banner.png';
import Navbar from '../Components/Navbar';
import { Container } from '../GlobalStyles';

const Banner = () => {
  return (
    <div>
      <BannerSection>
        <BannerSectionInnerPart>
          <Container>
            <BannerInnerData>
              <BannerLeft>
                <BannerData>
                  <BannerHeading>Asset Management</BannerHeading>
                  <BannerDescription>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution
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
            </BannerInnerData>
          </Container>
        </BannerSectionInnerPart>
      </BannerSection>
    </div>
  );
};

export default Banner;
