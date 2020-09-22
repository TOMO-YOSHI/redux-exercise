import { COMMENTLIST_SETUP } from './comment.actions'

const INITIAL_STATE = {
  commentList: [
    {
      commentNo: "0001",
      userName: "TOMO",
      dateAndTime: new Date(),
      message: [`Welcome to "Discussion Thread"!!`,`Let's post your first comment!!!`],
    },
  ],
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case COMMENTLIST_SETUP:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default commentReducer;