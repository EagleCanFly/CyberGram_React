import {authorize} from "./authReducer";

const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_SUCCESS: {

            return {
                ...state,
                isInitialized: true
            }
        }
        default: {
            return state;
        }

    }
}
export const authSuccess = () => {
    return {
        type: AUTH_SUCCESS
    }
}

export const init = () => {
    return (dispatch) => {

        let promise = dispatch(authorize());

        promise.then(() => {
                dispatch(authSuccess())
            }
        )
    }
}
export default appReducer;