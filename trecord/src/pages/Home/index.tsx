import { EmptyHome } from '@components/EmptyHome';
import { FeedHome } from '@components/FeedHome';
import { NavBarHome } from '@components/common/navBar/NavBarHome';
import { NewBtn } from '@components/common/NewBtn';
import { TabBar } from '@components/common/TabBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [feedData, setFeedData] = useState([]);
  const navigate = useNavigate();
  const getToken = localStorage.getItem('acessToken');

  useEffect(() => {
    if (getToken) {
      fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/feeds`, {
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
          setFeedData(data.data.feeds);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      {feedData.length > 0 ? <FeedHome pageData={feedData} /> : <EmptyHome />}
      <NewBtn
        type="edit"
        iconWidth={24}
        onClick={() => {
          navigate('/newfeed', { replace: true });
        }}
      />
      <TabBar currentPage="home" />
      <NavBarHome totalPage={feedData.length} />
    </>
  );
};
