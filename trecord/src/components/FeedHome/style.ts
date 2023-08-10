import { styled } from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 660px;
  justify-content: flex-start;
  position: absolute;
  width: 100%;
  gap: 10px;
`;

export const TopBox = styled.div`
  height: 90px;
`;

export const ImgBox = styled.div`
  display: flex;
  width: 342px;
  height: 180px;
  position: relative;
  border-radius: 8px;

  img {
    border-radius: 8px;
    filter: brightness(70%);
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 68%;
  left: 3%;
  .feed_name {
    ${({ theme }) => theme.font.fontSize.Title_S}
    ${({ theme }) => theme.font.fontType.S}
    color:${({ theme }) => theme.colors.colorStyles.gray100}
  }
  .feed_sub {
    ${({ theme }) => theme.font.fontSize.Body_S}
    ${({ theme }) => theme.font.fontType.R}
    color:${({ theme }) => theme.colors.colorStyles.gray100}
  }
`;
