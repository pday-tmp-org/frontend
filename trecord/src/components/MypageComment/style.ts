import styled from 'styled-components';

export const Layout = styled.div`
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 80px);
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ContentBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Body_S}
  ${({ theme }) => theme.font.fontType.R}
`;
export const DateBox = styled.span`
  ${({ theme }) => theme.font.fontSize.Caption_S}
  ${({ theme }) => theme.font.fontType.R}
  color: ${({ theme }) => theme.colors.colorStyles.gray600};
`;
export const CommentBox = styled.div`
  display: flex;
  gap: 20px;
  width: 310px;
  justify-content: space-between;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export const LineBox = styled.hr`
  width: 390px;
  border: 1px solid ${({ theme }) => theme.colors.colorStyles.gray300};
  background: none;
`;
