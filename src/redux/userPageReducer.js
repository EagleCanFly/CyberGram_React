import {userAPI} from "../DAL/api";

const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_USERS_PAGE = "SET_USERS_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING",
    TOGGLE_BTN_DISABLED = "TOGGLE_BTN_DISABLED"

let initialState = {
    users: [],
    initialPage: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true,
    isBtnDisabled: []
};

const usersPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        }
        case SET_USERS:
            return {
                ...state,
                // users: [...state.users, ...action.users]
                users: action.users
            }
        case SET_USERS_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.total
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.value
            }
        case TOGGLE_BTN_DISABLED:
            return {
                ...state,
                isBtnDisabled: (action.isFetching) // загружается?
                    ? [...state.isBtnDisabled, action.userId] // да - дописываем айди в массив
                    : state.isBtnDisabled.filter(id => id !== action.userId) // нет - удаляем айди из массива
            }
        default:
            return state;
    }
};

// action creators
export const followAC = (userID) => {
    return {
        type: FOLLOW,
        id: userID
    }
};
export const unfollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        id: userID
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
};
export const setUsersPage = (page) => {
    return {
        type: SET_USERS_PAGE,
        page
    }
};
export const setTotalCount = (total) => {
    return {
        type: SET_TOTAL_COUNT,
        total: total
    }
}
export const toggleIsFetching = (value) => {
    return {
        type: TOGGLE_IS_FETCHING,
        value
    }
}
export const toggleBtnDisabled = (userId, isFetching) => {
    return {
        type: TOGGLE_BTN_DISABLED,
        isFetching,
        userId
    }
}
export const getUsers = (userPages, currentPage) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await userAPI.getUsers(userPages, currentPage);
        dispatch(toggleIsFetching(false));
        dispatch(setTotalCount(data.totalCount));
        dispatch(setUsers(data.items));
    }
}
export const getUsersOnUpdate = (userPages, pageNumber) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        const data = await userAPI.getUsers(userPages, pageNumber);
            dispatch(toggleIsFetching(false));
            dispatch(setUsersPage(pageNumber));
            dispatch(setUsers(data.items));
    }
}
export const follow = (UserId) => {
    return async (dispatch) => {
        dispatch(toggleBtnDisabled(UserId, true));
        const response = await userAPI.follow(UserId)
        if (response.data.resultCode === 0) {
            dispatch(followAC(UserId));
            dispatch(toggleBtnDisabled(UserId, false));
        }
    }
}
export const unfollow = (UserId) => {
    return async (dispatch) => {
        dispatch(toggleBtnDisabled(UserId, true));
        const response = await userAPI.unfollow(UserId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowAC(UserId));
            dispatch(toggleBtnDisabled(UserId, false));
        }
    }
}


export default usersPageReducer;
