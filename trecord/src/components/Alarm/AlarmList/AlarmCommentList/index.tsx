import { Empty } from '@components/common/Empty';
import * as S from './style';
import { Icon } from '@components/common/Icon';
import { Fragment, useState } from 'react';
import useGetCommentAlarm from '@/apis/Alarm/getCommentAlarm';
import useDeleteAlarm from '@/apis/Alarm/deleteAlarm';
import Modal from '@components/common/Modal';
interface Props {
  id: number;
}
export const AlarmCommentList = () => {
  const { data: commentAlarmData, refetch } = useGetCommentAlarm();
  const { mutate } = useDeleteAlarm();
  const [isModalActive, setIsModalActive] = useState(false);
  const constant = {
    icon: {
      width: 111.37,
      height: 73,
    },
    title: '앗!',
    subTitle: [
      {
        id: 1,
        body: '아직 온 알림이 없어요.',
      },
    ],
  };
  const handleDeleteAlarm = ({ id }: Props) => {
    mutate(
      { id },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  };

  if (commentAlarmData?.content.length === 0) return <Empty {...constant} />;
  else
    return (
      <S.Layout>
        {commentAlarmData?.content.map((a, index) => (
          <Fragment key={a.userFrom.id}>
            <div className="container">
              <Icon iconType="message" width={24} />
              <div className="content">
                <span className="title">
                  <strong className="nickname">{a.type}</strong>님이 댓글을
                  남겼어요:
                </span>
                <span className="body">{a.content}</span>
                <span className="date">{a.date}</span>
              </div>
              <Icon
                iconType="close"
                width={24}
                onClick={() => setIsModalActive((prev) => !prev)}
              />
            </div>
            {commentAlarmData.content.length - 1 !== index && <S.LineBox />}
            <Modal
              openModal={isModalActive}
              title="알림을 삭제할까요?"
              closeText="취소"
              confirmText="삭제"
              onClose={() => setIsModalActive((prev) => !prev)}
              onConfirm={() => handleDeleteAlarm({ id: a.id })}
            />
          </Fragment>
        ))}
      </S.Layout>
    );
};
