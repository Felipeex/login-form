import axios from "axios"

export default axios.create({
    baseURL: 'https://api-auth-server.herokuapp.com/auth'
})