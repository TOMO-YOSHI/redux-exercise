import { userActionTypes } from './user.actions';

const INITIAL_STATE = {
  userInfo: {
    userName: "Visitor",
    authId: null,
    isLogin: false,
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
        return INITIAL_STATE;
      default:
        return state;
    }
}

export default userReducer;


