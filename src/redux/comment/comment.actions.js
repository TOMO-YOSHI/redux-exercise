export const commentActionTypes = {
  COMMENTLIST_SETUP: "COMMENTLIST_SETUP",
  ADD_NEWCOMMENT: "ADD_NEWCOMMENT",
  MODIFY_COMMENT: "MODIFY_COMMENT",
};

export const commentListSetUp = (comments) => ({
  type: commentActionTypes.COMMENTLIST_SETUP,
  payload: comments
});

export const addNewComment = (comment) => ({
  type: commentActionTypes.ADD_NEWCOMMENT,
  payload: comment
});

export const modifyComment = (comment) => ({
  type: commentActionTypes.MODIFY_COMMENT,
  payload: comment
});