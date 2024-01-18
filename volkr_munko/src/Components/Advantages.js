import React from 'react';
import {
  AdvantagesInnerPart,
  AdvantagesSection,
  Container,
  AdvantageLeftInner,
  AdvantageRightInner,
  LeftImage,
  AdvantagesContent,
  AdvantagesDecription,
  AdvantageHeading,
  AdvantageUlContent,
  AdvantageLiDetails,
  LiNumber,
  LiContent,
} from '../Css/AdvantagesStyled';

import advantagesimage from '../Assests/advantagesimage.png';

const Advantages = () => {
  return (
    <div>
      <AdvantagesSection>
        <Container>
          <AdvantagesInnerPart>
            <AdvantageLeftInner>
              <LeftImage>
                <img src={advantagesimage} alt="AdvantageImages" />
              </LeftImage>
            </AdvantageLeftInner>
            <AdvantageRightInner>
              <AdvantagesContent>
                <AdvantageHeading>Your advantages at a glance</AdvantageHeading>
                <AdvantagesDecription>
                  It is a long established fact that a reader will be distracted
                </AdvantagesDecription>
                <AdvantageUlContent>
                  <AdvantageLiDetails>
                    <LiNumber>1</LiNumber>
                    <LiContent>You take center stage</LiContent>
                  </AdvantageLiDetails>
                  <AdvantageLiDetails>
                    <LiNumber>2</LiNumber>
                    <LiContent>Your finances: easier than ever</LiContent>
                  </AdvantageLiDetails>
                  <AdvantageLiDetails>
                    <LiNumber>3</LiNumber>
                    <LiContent>With the best partners at your side</LiContent>
                  </AdvantageLiDetails>
                </AdvantageUlContent>
              </AdvantagesContent>
            </AdvantageRightInner>
          </AdvantagesInnerPart>
        </Container>
      </AdvantagesSection>
    </div>
  );
};

export default Advantages;
