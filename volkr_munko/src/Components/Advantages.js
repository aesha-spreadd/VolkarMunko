import React from 'react';
import {
  AdvantagesInnerPart,
  AdvantagesSection,
  AdvantageLeft,
  AdvantageRight,
  LeftImage,
  AdvantagesContent,
  AdvantagesDescription,
  AdvantageHeading,
  AdvantageUlContent,
  AdvantageLiDetails,
  LiNumber,
  LiContent,
} from '../css/AdvantagesStyled';
import advantageImage from '../assets/advantages-image.png';
import { Container } from '../GlobalStyles';

const Advantages = ({ data }) => {
  return (
    <div>
      <AdvantagesSection>
        <Container>
          <AdvantagesInnerPart>
            <AdvantageLeft>
              <LeftImage>
                <img src={advantageImage} alt="advantage" />
              </LeftImage>
            </AdvantageLeft>
            <AdvantageRight>
              <AdvantagesContent>
                <AdvantageHeading>Your advantages at a glance</AdvantageHeading>
                <AdvantagesDescription>
                  It is a long established fact that a reader will be distracted
                </AdvantagesDescription>
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
            </AdvantageRight>
          </AdvantagesInnerPart>
        </Container>
      </AdvantagesSection>
    </div>
  );
};

export default Advantages;
