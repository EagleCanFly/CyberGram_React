import * as axios from 'axios';

// const API_KEY = ''a47e3459-989a-4b58-82b4-6d9ded3406b1'';
const API_KEY_2 = '074d13fd-ecad-4e46-afbb-050ff2579b19';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': API_KEY_2
    }
})

export const authAPI = {
    authRequest() {
        return instance.get('auth/me')
    },
    login(email, password) {
        return instance.post(`auth/login`, {email,password})
    },
    logout() {
        return instance.post('auth/logout');
    }
}
export const profileAPI = {
    setProfile(profileNumber) {
        return instance.get('profile/' + profileNumber).then(response => {
            return response.data;
        })
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status});
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(response => {
            return response.data;
        })
    }
}

export const userAPI = {
    getUsers(count, page) {
        return instance.get(`users?count=${count}&page=${page}`).then(response => {
            return response.data;
        })
    },
    follow(userId) { // POST принимает 3 параметра
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    }
}