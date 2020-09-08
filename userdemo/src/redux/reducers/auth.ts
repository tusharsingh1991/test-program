import { IAuthReducer, IAction } from "../../interfaces/reducers";
import ActionTypes from "../types";

const initialState: IAuthReducer = {
    isLoggedIn: false,
    userEmail: '',
    userName: ''
}
const Auth = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionTypes.Auth.AUTH_ACTION_LOGIN:
            return state;
        default:
            return state;
    }
}
export default Auth;