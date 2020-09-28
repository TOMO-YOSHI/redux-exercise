import { userActionTypes } from './user.actions';

const INITIAL_STATE = {
  userInfo: {
    userName: "Visitor",
    authId: null,
    isLogin: false,
    userImageUrl:
      "https://firebasestorage.googleapis.com/v0/b/chat-app-8976e.appspot.com/o/no_profile.png?alt=media&token=ab1a24c8-e687-4485-915c-e8b3da6d1738",
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case userActionTypes.USER_LOGIN_SIGNUP:
        return {
          ...state,
          userInfo: action.payload,
        };
      case userActionTypes.USERNAME_CHANGE:
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            userName: action.payload,
          },
        };
      case userActionTypes.USER_LOGOUT:
        return state;
      case userActionTypes.USER_IMAGE_GET:
        return {
          ...state,
          userInfo: {
            ...state.userInfo,
            userImageUrl: action.payload,
          },
        };
      default:
        return state;
    }
}

export default userReducer;


