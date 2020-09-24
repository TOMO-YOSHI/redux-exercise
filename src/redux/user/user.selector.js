import { createSelector } from "reselect";

const userSelector = (state) => state.user;

export const getUserInfo = createSelector(
  [userSelector],
  (state) => state.userInfo
);
