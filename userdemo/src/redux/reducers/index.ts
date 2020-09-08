import Auth from './auth';
import Stories from './stories';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    Auth,
    Stories
});
export default RootReducer;
export type RootReducerTypes = ReturnType<typeof RootReducer>;