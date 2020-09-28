export const userActionTypes = {
  USER_LOGIN_SIGNUP: "USER_LOGIN_SIGNUP",
  USER_LOGOUT: "USER_LOGOUT",
  USER_INITIALIZE: "USER_INITIALIZE",
  USERNAME_CHANGE: "USERNAME_CHANGE",
  USER_IMAGE_GET: "USER_IMAGE_GET"
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

export const userImageGet = (imageUrl) => ({
  type: userActionTypes.USER_IMAGE_GET,
  payload: imageUrl,
});