const FOLLOW = "FOLLOW",
    UNFOLLOW = "UNFOLLOW",
    SRC = 'https://st.kp.yandex.net/images/actor_iphone/iphone360_25584.jpg';

let initialState = {
    users: [
        {
            id: 1,
            name: "Brad",
            lastName: "Pitt",
            isFollowed: true,
            avatarSrc: SRC,
            status: 'Hey',
            country: 'Russia',
            city: 'Semiluki'
        },
        {
            id: 2,
            name: "Mihal",
            lastName: "Palich",
            isFollowed: false,
            avatarSrc: 'https://4fun.one/uploads/posts/t/1574275682.jpeg',
            status: 'sup',
            country: 'Japan',
            city: 'Kyoto'
        }
    ]

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
        default:
            return state;
    }
};

export const followAC = (userID) => {
    return {
        type: FOLLOW,
        id: userID
    }
};
export const unFollowAC = (userID) => {
    return {
        type: UNFOLLOW,
        id: userID
    }
};

export default usersPageReducer;
