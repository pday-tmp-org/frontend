import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { http } from '../_http';
import { GetReplyCommentResponse } from '@/types/comment';
import COMMENT_API_KEY from './constants';

interface Props {
  commentId: number;
  pageCount: number;
}
export const getReplyComment = async ({
  commentId,
  pageCount,
}: Props): Promise<GetReplyCommentResponse> => {
  const url = `/api/v1/comments/${commentId}/replies?page=0&size=${pageCount}`;
  const response: GetReplyCommentResponse = await http.get(url);
  return response;
};

const useGetReplyComment = ({
  commentId,
  pageCount,
}: Props): UseQueryResult<GetReplyCommentResponse> => {
  return useQuery(
    [
      COMMENT_API_KEY.REPLY_COMMENT,
      { comment_id: commentId, page_count: pageCount },
    ],
    () => getReplyComment({ commentId, pageCount }),
    {
      suspense: true,
    },
  );
};

export default useGetReplyComment;
