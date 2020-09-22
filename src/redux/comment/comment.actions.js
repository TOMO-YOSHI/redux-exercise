export const commentActionTypes = {
    COMMENTLIST_SETUP: "COMMENTLIST_SETUP",
    ADD_NEWCOMMENT: "ADD_NEWCOMMENT"
};

export const commentListSetUp = () => ({
  type: commentActionTypes.COMMENTLIST_SETUP,
  // payload: comments
});

export const addNewComment = (comment) => ({
  type: commentActionTypes.ADD_NEWCOMMENT,
  payload: comment
});