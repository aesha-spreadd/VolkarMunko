import styled from 'styled-components';
import theme from '../theme';

export const FooterBottomSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.23);
  padding: 40px 10px;

  @media (max-width: 991px) {
    padding: 20px 10px 10px;
  }
`;

export const FooterBottomInnerPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterBottomLeft = styled.div``;

export const CopyRightText = styled.div`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.white};

  @media (max-width: 991px) {
    font-size: 12px;
    margin: 0 0 10px 0;
  }
`;

export const FooterBottomRight = styled.div``;

export const RightInnerUl = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const RightInnerLi = styled.div`
  padding: 0 36px;

  &:not(:last-child) {
    border-right: 1px solid ${theme.ZambeziGrey};
  }

  @media (max-width: 991px) {
    padding: 0 16px 0 0;
    margin: 0 10px 10px 0;
  }
`;
export const FooterText = styled.div`
  font-family: Nunito-Regular;
  font-size: 16px;
  line-height: 20px;
  color: ${theme.white};

  @media (max-width: 991px) {
    font-size: 12px;
  }
`;
