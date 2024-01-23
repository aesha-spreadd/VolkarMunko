import React from 'react';
import {
  WealthManagementSection,
  Container,
  WealthManagementInnerPart,
  LeftInner,
  RightInner,
  WealthManagementLeftData,
  WealthManagementHeading,
  WealthManagementContent,
  WealthManagementLiDetails,
  WealthManagementIcon,
  WealthManagementDescription,
  WealthManagementRightContent,
} from '../css/WealthManagementStyled';
import img from '../assests/CheckIcon.png';

const WealthManagement = ({ data }) => {
  return (
    <div>
      <WealthManagementSection>
        <Container>
          <WealthManagementInnerPart>
            <LeftInner>
              <WealthManagementLeftData>
                <WealthManagementHeading>
                  Wealth management consulting with a seal of approval in Vlotho
                </WealthManagementHeading>
                <WealthManagementContent>
                  {Array.isArray(data) &&
                    data.map((item, index) => (
                      <WealthManagementLiDetails key={index}>
                        <WealthManagementIcon>
                          <img src={img} alt="checkimage" />
                        </WealthManagementIcon>
                        <WealthManagementDescription>
                          {item}
                        </WealthManagementDescription>
                      </WealthManagementLiDetails>
                    ))}
                </WealthManagementContent>
              </WealthManagementLeftData>
            </LeftInner>
            <RightInner>
              <WealthManagementLeftData>
                <WealthManagementRightContent>
                  {Array.isArray(data) &&
                    data.length > 5 &&
                    data.slice(5).map((item, index) => (
                      <WealthManagementLiDetails key={index}>
                        <WealthManagementIcon>
                          <img src={img} alt="checkimage" />
                        </WealthManagementIcon>
                        <WealthManagementDescription>
                          {item}
                        </WealthManagementDescription>
                      </WealthManagementLiDetails>
                    ))}
                </WealthManagementRightContent>
              </WealthManagementLeftData>
            </RightInner>
          </WealthManagementInnerPart>
        </Container>
      </WealthManagementSection>
    </div>
  );
};

export default WealthManagement;
