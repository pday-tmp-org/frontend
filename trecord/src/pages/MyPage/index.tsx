import { LoginProfileImg } from '@components/LoginProfile/LoginProfileImg';
import { LoginProfileName } from '@components/LoginProfile/LoginProfileName';
import { useEffect, useState } from 'react';
import * as S from './style';
import { LoginProfileIntroduce } from '@components/LoginProfile/LoginProfileIntroduce';
import { ProfileNewButton } from '@components/common/button/ProfileNewButton';
import { TabBar } from '@components/common/TabBar';
import { MyPageBtn } from '@components/MyPage/MyPageBtn';
import { NavBarProfile } from '@components/common/NavBar/NavBarProfile';
import { MyPageTitle } from '@components/MyPage/MyPageTitle';
import { MyPageMenu, mypageMenuProps } from '@components/MyPage/MyPageMenu';
import { useNavigate } from 'react-router-dom';
export const MyPage = () => {
  const [profileFile, setProfileFile] = useState<{
    imgFile: string;
    originFile: File | Blob | string;
  }>({
    imgFile: '',
    originFile: '',
  });
  const [profileUrl, setProfilUrl] = useState<string>('');
  const [nickName, setNickName] = useState<string>('');
  const [introduce, setIntroduce] = useState<string>('');
  const getToken = localStorage.getItem('acessToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getToken,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setProfilUrl(data.data.imageUrl);
          setNickName(data.data.nickname);
          setIntroduce(data.data.introduction);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  const menuServiceConstant: mypageMenuProps = {
    title: '서비스 설정',
    menuList: [
      {
        id: 1,
        btnIcon: 'userEdit',
        btnTitle: '프로필 변경',
        onClick: () => navigate('./mypageProfile'),
      },
    ],
  };

  const menuActiveConstant: mypageMenuProps = {
    title: '나의 활동',
    menuList: [
      {
        id: 1,
        btnIcon: 'heart',
        btnTitle: '좋아요',
      },
      {
        id: 2,
        btnIcon: 'message',
        btnTitle: '댓글',
      },
    ],
  };

  const menuEtcConstant: mypageMenuProps = {
    title: '기타',
    menuList: [
      {
        id: 1,
        btnTitle: '로그아웃',
      },
      {
        id: 2,
        btnTitle: '회원탈퇴',
      },
    ],
  };

  return (
    <S.Layout>
      <NavBarProfile mainTitle="마이페이지" />
      <MyPageTitle
        imgUrl={profileUrl}
        nickname={nickName}
        introduce={introduce}
      />
      <S.ThickLineBox />
      <MyPageMenu {...menuServiceConstant} />
      <S.ThinLineBox />
      <MyPageMenu {...menuActiveConstant} />
      <S.ThinLineBox />
      <MyPageMenu {...menuEtcConstant} />
      <TabBar currentPage="mypage" />
    </S.Layout>
  );
};
