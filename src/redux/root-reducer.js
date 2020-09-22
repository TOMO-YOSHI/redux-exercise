import { combineReducers } from 'redux';

import commentReducer from './comment/comment.reducer';


export const rootReducer = combineReducers({
    comments: commentReducer
});

// export default rootReducer;