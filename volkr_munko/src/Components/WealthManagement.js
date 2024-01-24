import React from 'react';
import {
  WealthManagementSection,
  Container,
  WealthManagementInnerPart,
  LeftInner,
  RightInner,
  WealthManagementLeftData,
  WealthManagementRightData,
  WealthManagementHeading,
  WealthManagementContent,
  WealthManagementLiDetails,
  WealthManagementIcon,
  WealthManagementDescription,
  WealthManagementRightContent,
} from '../css/WealthManagementStyled';
import checkIcon from '../assets/checkIcon.png';

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
                    data.slice(0, 7).map((item, index) => (
                      <WealthManagementLiDetails key={index}>
                        <WealthManagementIcon>
                          <img src={checkIcon} alt="checkmark" />
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
              <WealthManagementRightData>
                <WealthManagementRightContent>
                  {Array.isArray(data) &&
                    data.slice(0, 4).map((item, index) => (
                      <WealthManagementLiDetails key={index}>
                        <WealthManagementIcon>
                          <img src={checkIcon} alt="checkmark" />
                        </WealthManagementIcon>
                        <WealthManagementDescription>
                          {item}
                        </WealthManagementDescription>
                      </WealthManagementLiDetails>
                    ))}
                </WealthManagementRightContent>
              </WealthManagementRightData>
            </RightInner>
          </WealthManagementInnerPart>
        </Container>
      </WealthManagementSection>
    </div>
  );
};

export default WealthManagement;
