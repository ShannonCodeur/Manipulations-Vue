import axios from 'axios'

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        LOGIN: ({commit}, payload) => {
            console.log(this.$store)
            console.log(commit)
            return new Promise((resolve, reject) => {
                axios
                    .post('login_check', payload)
                    .then(({data, status}) => {
                        if(status === 200) {
                            resolve(true)
                            console.log(data)
                        }
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
        }
    }
}