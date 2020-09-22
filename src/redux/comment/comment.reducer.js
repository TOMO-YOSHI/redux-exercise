import { commentActionTypes } from "./comment.actions";

const INITIAL_STATE = {
  commentList: [
    {
      commentNo: "0000",
      userName: "TOMO",
      date: "09/22/2020",
      time: "00:00",
      message: [
        // `Welcome to "Chatting Place"!!`,
        // `Hi, I'm Tomo, I developed this chat app!!`,
      ],
    },
    // {
    //   commentNo: "0001",
    //   userName: "TOMO",
    //   dateAndTime: new Date(),
    //   message: [
    //     `Welcome to "Chatting Place"!!`,
    //     `Hi, I'm Tomo, I developed this chat app!!`,
    //   ],
    // },
    // {
    //   commentNo: "0002",
    //   userName: "TOMO",
    //   dateAndTime: new Date(),
    //   message: [
    //     `Please leave your first comment!!`,
    //   ],
    // },
  ],
};

const commentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case commentActionTypes.COMMENTLIST_SETUP:
        return {
          ...state,
          commentList: action.payload,
        };
      case commentActionTypes.ADD_NEWCOMMENT:
        return {
          ...state,
          commentList: [...state.commentList, action.payload],
        };
      default:
        return state;
    }
}

export default commentReducer;