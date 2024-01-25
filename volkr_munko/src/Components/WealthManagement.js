import React from 'react';
import {
  WealthManagementSection,
  WealthManagementInnerPart,
  WealthManagementLeft,
  WealthManagementRight,
  WealthManagementLeftData,
  WealthManagementRightData,
  WealthManagementHeading,
  WealthManagementContent,
  WealthManagementLiDetails,
  WealthManagementIcon,
  WealthManagementDescription,
  WealthManagementRightContent,
} from '../css/WealthManagementStyled';
import { Container } from '../GlobalStyles';
import checkIcon from '../assets/check-icon.png';

const WealthManagement = ({ data }) => {
  return (
    <div>
      <WealthManagementSection>
        <Container>
          <WealthManagementInnerPart>
            <WealthManagementLeft>
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
            </WealthManagementLeft>
            <WealthManagementRight>
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
            </WealthManagementRight>
          </WealthManagementInnerPart>
        </Container>
      </WealthManagementSection>
    </div>
  );
};

export default WealthManagement;
