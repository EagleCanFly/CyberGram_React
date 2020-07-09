import {profileAPI} from "../DAL/api";

const SEND_WALL_POST = "SEND-WALL-POST",
    DELETE_WALL_POST = 'DELETE_WALL_POST',
    SET_PROFILE_DATA = "SET_PROFILE_DATA",
    SET_STATUS = "SET_STATUS",
    UPDATE_PHOTO_SUCCESS = 'UPDATE_PHOTO_SUCCESS',
    TOGGLE_PHOTO_EDIT_MODE = 'TOGGLE_PHOTO_EDIT_MODE';

let initialState = {
    msgInfo: [],
    profile: null,
    status: '',
    isSendPhotoModeActive: false
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_WALL_POST: {
            return {
                ...state,
                msgInfo: [
                    ...state.msgInfo,
                    {
                        likes: Math.floor(Math.random() * 10),
                        message: action.message
                    },
                ]
            };
        }
        case DELETE_WALL_POST: {
            return {
                ...state,
                msgInfo: [
                    ...state.msgInfo.filter((msg, id) => action.id !== id)
                ]
            };
        }

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
        case UPDATE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photoFile}
            }
        case TOGGLE_PHOTO_EDIT_MODE:
            return {
                ...state,
                isSendPhotoModeActive: action.value
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
export const deleteWallPost = (id) => {
    return {
        type: DELETE_WALL_POST,
        id
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
export const updatePhotoSuccess = (photoFile) => {
    return {
        type: UPDATE_PHOTO_SUCCESS,
        photoFile
    }
}
export const togglePhotoEditMode = (value) => {
    return {
        type: TOGGLE_PHOTO_EDIT_MODE,
        value
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
export const changePhoto = (file) => {
    return async (dispatch) => {
        const response = await profileAPI.uploadPhoto(file);
        dispatch(updatePhotoSuccess(response.data.photos));
    }
}