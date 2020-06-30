import {profileAPI} from "../DAL/api";

const SEND_WALL_POST = "SEND-WALL-POST",
    UPDATE_PROFILE_TEXT = "UPDATE-PROFILE-TEXT",
    SET_PROFILE_DATA = "SET_PROFILE_DATA",
    SET_STATUS = "SET_STATUS";

let initialState = {
    msgInfo: [],
    updatedText: "",
    profile: null,
    status: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_WALL_POST: {
            return {
                ...state,
                msgInfo: [
                    ...state.msgInfo,
                    {likes: Math.floor(Math.random() * 10), message: action.message},
                ],
                updatedText: "",
            };
        }
        case UPDATE_PROFILE_TEXT:
            return {
                ...state,
                updatedText: action.message,
            };
        case SET_PROFILE_DATA:
            return {
                ...state,
                profile: action.data
            }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};
export default profilePageReducer;

export const sendWallPost = (text) => {
    return {
        type: SEND_WALL_POST,
        message: text,
    };
};
export const updateWallPost = (text) => {
    return {
        type: UPDATE_PROFILE_TEXT,
        message: text,
    };
};
export const setProfileData = (data) => {
    return {
        type: SET_PROFILE_DATA,
        data
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

export const setProfile = (userId) => {
    return async (dispatch) => {
        const profileData = await profileAPI.setProfile(userId)
        dispatch(setProfileData(profileData));

        const status = await profileAPI.getStatus(userId);
        dispatch(setStatus(status))
    }
}
export const updateStatusText = (status) => {
    return async (dispatch) => {
        await profileAPI.updateStatus(status);
        dispatch(setStatus(status));

    }
}
