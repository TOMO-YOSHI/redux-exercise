import { createSelector } from 'reselect';

const commentsSelector = (state) => state.comments;

export const getCommentList = createSelector(
    [commentsSelector],
    state => state.commentList
)