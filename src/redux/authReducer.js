import {authAPI, securityAPI} from "../DAL/api";

const TOGGLE_IS_AUTH = 'TOGGLE_IS_AUTH',
    TOGGLE_IS_ERROR = 'TOGGLE_IS_ERROR',
    SET_CAPTCHA_URL = 'SET_CAPTCHA_URL';

let initialData = {
    data: {
        id: "",
        login: "",
        email: "",

    },
    messages: [],
    resultCode: 0,
    captchaUrl: null,
    isAuth: false,
    isError: false
}


const authReducer = (state = initialData, action) => {
    switch (action.type) {

        case TOGGLE_IS_AUTH: {
            return {
                ...state,
                ...action.data,
                isAuth: action.value
            }
        }
        case TOGGLE_IS_ERROR: {
            return {
                ...state,
                isError: action.value
            }
        }
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default: {
            return state;
        }
    }
}

export const toggleIsAuth = (value, data) => {
    return {
        type: TOGGLE_IS_AUTH,
        value,
        data
    }
};
export const toggleIsError = (value, data) => {
    return {
        type: TOGGLE_IS_ERROR,
        value
    }
};
export const setCaptchaUrl = (captchaUrl) => {
    return {
        type: SET_CAPTCHA_URL,
        captchaUrl
    }
}

export const authorize = () => {
    return (dispatch) => {
        return authAPI.authRequest().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(toggleIsAuth(true, response.data));
            }
        })
    }
}
export const login = (email, password, captcha) => {
    return async (dispatch) => {
        const response = await authAPI.login(email, password, captcha);

        if (response.data.resultCode === 0) {
            dispatch(toggleIsError(false));
            dispatch(setCaptchaUrl(null));
            dispatch(toggleIsAuth(true, response.data));
            dispatch(authorize());
            return response;
        } else if (response.data.resultCode === 1) {
            dispatch(toggleIsError(true));
            return response;
        } else if (response.data.resultCode === 10) {
            const response = await securityAPI.getCaptcha();
             dispatch(setCaptchaUrl(response.data.url));
        }
    }
}
export const logout = () => {
    return async (dispatch) => {
        const response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(toggleIsAuth(false, null));
        }
    }
}

export default authReducer;