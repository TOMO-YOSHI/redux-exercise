export const addCommentToList = (commentList, newComment) => {
    const exsistingComment = 
    commentList.find(comment => 
        comment.id === newComment.id);

    if(exsistingComment) {
        return [...commentList];
    }

    return [...commentList, newComment];
};