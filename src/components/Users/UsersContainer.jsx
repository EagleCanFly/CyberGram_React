import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unFollowAC} from "../../redux/userPageReducer";


const mapStateToProps = (state) => {
    return {
        state: state.usersPage
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
