const SEND_WALL_POST = "SEND-WALL-POST",
    UPDATE_PROFILE_TEXT = "UPDATE-PROFILE-TEXT",
    SET_PROFILE_DATA = "SET_PROFILE_DATA";

let initialState = {
    msgInfo: [
        {
            likes: 0,
            message: "Hey dude",
        },
        {
            likes: 5,
            message: "How's it going?",
        },
        {
            likes: 1486,
            message: "Not too bad",
        },
    ],
    updatedText: "",
    profile: null
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
        default:
            return state;
    }
};
export default profilePageReducer;

export const sendWallPostCreator = (text) => {
    return {
        type: SEND_WALL_POST,
        message: text,
    };
};
export const updateWallPostCreator = (text) => {
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
