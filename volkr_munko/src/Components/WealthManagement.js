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
} from '../Css/WealthManagementStyled';

import img from '../Assests/CheckIcon.png';

const WealthManagement = () => {
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
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      Am I properly insured? Can I optimize my contracts? Do I
                      end up paying too much?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      What is my financial situation like in the event of
                      illness, care or disability?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      Should I continue to rent or can I afford a property?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      How can I reduce taxes and social security contributions?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      How can I save more without giving up a good life?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                </WealthManagementContent>
              </WealthManagementLeftData>
            </LeftInner>
            <RightInner>
              <WealthManagementLeftData>
                <WealthManagementRightContent>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      What alternatives are there to the savings book? Is my
                      money well spent?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      How can I use government funding?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      What alternatives are there to the savings book? Is my
                      money well spent?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
                  <WealthManagementLiDetails>
                    <WealthManagementIcon>
                      <img src={img} alt="CheckiconImage" />
                    </WealthManagementIcon>
                    <WealthManagementDescription>
                      How can I protect my money from inflation?
                    </WealthManagementDescription>
                  </WealthManagementLiDetails>
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
