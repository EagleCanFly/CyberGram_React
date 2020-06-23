import {authAPI} from "../DAL/api";

const SET_LOGIN_DATA = "SET_LOGIN_DATA";

let initialData = {
    data: {
        id: "",
        login: "",
        email: "",

    },
    messages: [],
    resultCode: null,
    isAuth: false
}


const authReducer = (state = initialData, action) => {

    switch (action.type) {
        case SET_LOGIN_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        default: {
            return state;
        }
    }
}

export const setLoginData = (data) => {
    return {
        type: SET_LOGIN_DATA,
        data,
    }
};

export const authorize = () => {

    return (dispatch) => {
        authAPI.authRequest().then(response => {
           if (response.data.resultCode === 0) {
                dispatch(setLoginData(response.data));
           }
        })
    }
}

export default authReducer;