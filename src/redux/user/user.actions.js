export const userActionTypes = {
  USER_LOGIN_SIGNUP: "USER_LOGIN_SIGNUP",
  USER_LOGOUT: "USER_LOGOUT",
  USER_INITIALIZE: "USER_INITIALIZE",
  USERNAME_CHANGE: "USERNAME_CHANGE"
};

export const userInitialize = () => ({
  type: userActionTypes.USER_INITIALIZE,
});

export const userLoginSignup = (user) => ({
  type: userActionTypes.USER_LOGIN_SIGNUP,
  payload: user
});

export const userLogout = () => ({
  type: userActionTypes.USER_LOGIN_SIGNUP,
});

export const userNameChange = (userName) => ({
  type: userActionTypes.USERNAME_CHANGE,
  payload: userName
});