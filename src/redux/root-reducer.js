import { combineReducers } from 'redux';

import commentReducer from './comment/comment.reducer';
import userReducer from './user/user.reducer';


export const rootReducer = combineReducers({
    comments: commentReducer,
    user: userReducer
});

// export default rootReducer;