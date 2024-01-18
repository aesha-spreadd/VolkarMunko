import React from 'react';
import {
  ProductSection,
  Container,
  ProductsInner,
  ProductHeading,
  ProductMainHeading,
  ProductDescription,
  ProductButtons,
  PrivateCustomerButton,
  PrivateCustomerButtonText,
  PrivateCustomerButtonIcon,
  PrivateGroupButton,
  GroupButtonIcon,
  GroupButtonText,
  ProductsInnerCard,
  ProductInnerCardDetails,
  ProductCardText,
  ProductCardIButton,
  ProductCardButton,
  ProductCardIcon,
  FrontCard,
  BackCard,
  ProductBackDescription,
} from '../Css/ProductsStyled';

import img from '../Assests/manicon.png';
import groupIcon from '../Assests/GroupIcon.png';

const Products = ({ data }) => {
  return (
    <div>
      <ProductSection>
        <Container>
          <ProductsInner>
            <ProductHeading>
              <ProductMainHeading>Product & Solutions</ProductMainHeading>
              <ProductDescription>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters
              </ProductDescription>
              <ProductButtons>
                <PrivateCustomerButton>
                  <PrivateCustomerButtonIcon>
                    <img src={img} alt="manicon" />
                  </PrivateCustomerButtonIcon>
                  <PrivateCustomerButtonText>
                    Private Customer
                  </PrivateCustomerButtonText>
                </PrivateCustomerButton>
                <PrivateGroupButton>
                  <GroupButtonIcon>
                    <img src={groupIcon} alt="groupicon" />
                  </GroupButtonIcon>
                  <GroupButtonText>Corporate Customers</GroupButtonText>
                </PrivateGroupButton>
              </ProductButtons>
            </ProductHeading>
            <ProductsInnerCard>
              {Array.isArray(data) &&
                data.map((card, index) => (
                  <ProductInnerCardDetails key={index}>
                    <FrontCard>
                      <ProductCardIButton>
                        <img src={card.ibuttonSrc} alt="Ibutton" />
                      </ProductCardIButton>
                      <ProductCardIcon>
                        <img src={card.iconSrc} alt="iconbutton" />
                      </ProductCardIcon>
                      <ProductCardText>{card.text}</ProductCardText>
                      <ProductCardButton>{card.buttonText}</ProductCardButton>
                    </FrontCard>
                    <BackCard>
                      <ProductCardIButton>
                        <img src={card.ibuttonSrc} alt="Ibutton" />
                      </ProductCardIButton>
                      <ProductBackDescription>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable EnglishLorem Ipsum
                        is that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable Englishthat it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here, content here', making it look
                        like readable English
                      </ProductBackDescription>
                    </BackCard>
                  </ProductInnerCardDetails>
                ))}
            </ProductsInnerCard>
          </ProductsInner>
        </Container>
      </ProductSection>
    </div>
  );
};

export default Products;