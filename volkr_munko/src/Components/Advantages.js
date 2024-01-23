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
} from '../css/AdvantagesStyled';

import advantagesimage from '../assests/advantagesimage.png';

const Advantages = ({ data }) => {
  return (
    <div>
      <AdvantagesSection>
        <Container>
          <AdvantagesInnerPart>
            <AdvantageLeftInner>
              <LeftImage>
                <img src={advantagesimage} alt="advantageImage" />
              </LeftImage>
            </AdvantageLeftInner>
            <AdvantageRightInner>
              <AdvantagesContent>
                <AdvantageHeading>Your advantages at a glance</AdvantageHeading>
                <AdvantagesDecription>
                  It is a long established fact that a reader will be distracted
                </AdvantagesDecription>
                <AdvantageUlContent>
                  {Array.isArray(data) &&
                    data.map((advantage, index) => (
                      <AdvantageLiDetails key={index}>
                        <LiNumber>{advantage.number}</LiNumber>
                        <LiContent>{advantage.content}</LiContent>
                      </AdvantageLiDetails>
                    ))}
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
