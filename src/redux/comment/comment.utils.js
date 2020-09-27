export const addCommentToList = (commentList, newComment) => {
    const exsistingComment = 
    commentList.find(comment => 
        comment.id === newComment.id);

    if(exsistingComment) {
        return [...commentList];
    }

    return [...commentList, newComment];
};

export const modifyComment = (commentList, newComment) => {
  const exsistingCommentIndex = commentList.findIndex(
    (comment) => comment.id === newComment.id
  );

  if (exsistingCommentIndex) {
    commentList[exsistingCommentIndex] = newComment;
    return [...commentList];
  }

  return [...commentList];
};