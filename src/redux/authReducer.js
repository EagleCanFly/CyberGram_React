import {authAPI} from "../DAL/api";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";

let initialData = {
    data: {
        id: "",
        login: "",
        email: "",

    },
    messages: [],
    resultCode: null
}


const authReducer = (state = initialData, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA: {
            return {
                ...state,
                ...action.login
            }
        }
        default: {
            return state;
        }
    }
}

export const setLoginData = (login) => {
    return {type: SET_LOGIN_DATA, login}
};

export const authorize = () => {
    return (dispatch) => {
        authAPI.authRequest().then(data => {
            dispatch(setLoginData(data));
        })
    }
}

export default authReducer;