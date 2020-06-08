import * as axios from "axios";

// const API_KEY = "a47e3459-989a-4b58-82b4-6d9ded3406b1";
const API_KEY_2 = "074d13fd-ecad-4e46-afbb-050ff2579b19";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': API_KEY_2
    }
})

export const authAPI = {
    authRequest() {
        return instance.get("auth/me", { withCredentials: true}).then(response => {
            return response.data;
        })
    },
}
export const profileAPI = {
    setProfile(profileNumber) {
        return instance.get("profile/" + profileNumber, { withCredentials: true}).then(response => {
            return response.data;
        })
    },
}

export const userAPI = {
    getUsers(count, page) {
        return instance.get(`users?count=${count}&page=${page}`, {withCredentials: true}).then(response => {
            return response.data;
        })
    },
    follow(userId) { // POST принимает 3 параметра
        return instance.post(`follow/${userId}`, {}, {withCredentials: true})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {withCredentials: true})
    }
}