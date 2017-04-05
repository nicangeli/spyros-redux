import axios from 'axios'

export default {
    login: (email, password) => {
        return axios({
            method: 'POST',
            url: 'https://qa1-api.lendinvestinternal.com/api/login',
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            data: {
                email,
                password
            }
        }).then(res => {
            return res.data.token
        })
    }
}