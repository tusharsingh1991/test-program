export interface IAuthReducer {
    isLoggedIn: boolean,
    userName: string
    userEmail: string
}

export interface IAction {
    type: string,
    payload?: any
}