const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SET_USERS = "SET_USERS",
    SET_USERS_PAGE = "SET_USERS_PAGE",
    SET_TOTAL_COUNT = "SET_TOTAL_COUNT",
    TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [],
    userPages: 4,
    initialPage: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {

            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {...user, isFollowed: false}
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
                        return {...user, isFollowed: true}
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
            return  {
                ...state,
                isFetching: action.value
            }
        default:
            return state;
    }
};

// action creators
export const follow = (userID) => {
    return {
        type: FOLLOW,
        id: userID
    }
};
export const unfollow = (userID) => {
    return {
        type: UNFOLLOW,
        id: userID
    }
};
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
};
export const setUsersPage = (page) => {
    return {
        type: SET_USERS_PAGE,
        page: page  // если свойство и параметр имеют одинаковое имя, то можно указать только параметр
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


export default usersPageReducer;
