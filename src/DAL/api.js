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
    login(email, password, captcha) {
        return instance.post(`auth/login`, {email, password, captcha})
    },
    logout() {
        return instance.post('auth/logout');
    }
}
export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url');
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
    },
    uploadPhoto(photoFile) {
        const formdata = new FormData();
        formdata.append('image', photoFile)
        return instance.put('profile/photo/', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            return response.data;
        })
    },
    updateProfileInfo(info) {
        return instance.put('profile', info);

    }
}

export const userAPI = {
    getUsers(page) {
        return instance.get(`users?count=4&page=${page}`).then(response => {
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