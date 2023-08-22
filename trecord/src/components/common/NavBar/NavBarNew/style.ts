import styled from 'styled-components';
interface NavBarBackProps {
  isRegister: boolean;
}
export const Layout = styled.div<NavBarBackProps>`
  display: flex;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  gap: 80px;
`;

export const NavBarBox = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.font.fontSize.Title_M};
  ${({ theme }) => theme.font.fontType.S};
`;

export const SaveBox = styled.div`
  .comment_count {
    color: ${({ theme }) => theme.colors.colorStyles.gray900};
    ${({ theme }) => theme.font.fontSize.Caption_S};
    ${({ theme }) => theme.font.fontType.M};
  }

  button {
    border: none;
    background: none;
    ${({ theme }) => theme.font.fontSize.Button_M};
    ${({ theme }) => theme.font.fontType.M};
    &:disabled {
      ${({ theme }) => theme.colors.colorStyles.gray900};
    }
  }
`;
