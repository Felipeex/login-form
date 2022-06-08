/* imports */
import { toast } from "react-toastify"
import api from "./api"

/* erros de input */
const errors = {
    "Emptyemail": "E-mail é obrigatório",
    "Emptypassword": "Senha é obrigatório",
    "ValidateEmail": "Insira um e-mail válido",
    "RepeatPassword": "As senhas não coincidem"
}

/* request sign-Up */
async function SignInRequest(email, password) {
    try {
        const SignIn = await api.post('/signin', { email, password })
        return SignIn
    } catch (err) {
        throw new Error(err.response.data.error)
    }
}

/* request Sign-Up */
async function SignUpRequest(email, password) {
    try {
        const SignUp = await api.post('/signup', { email, password })
        return SignUp
    } catch (err) {
        throw new Error(err.response.data.error)
    }
}

/* notify function */
function Notify(type, desc) {
    const position = { position: "top-left" }
    if (type === 'warn') {
        toast.warn(desc, position)
    } else if(type === 'error') {
        toast.error(desc, position)
    } else if(type === 'success') {
        toast.success(desc, position)
    } else {
        toast(desc, position)
    }
}

/* Validate Email */
function ValidadeEmail(email) {
    const ValidadeEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return email.match(ValidadeEmail)
}

/* Validar inputs email e senha */

function ValidateInputs(setinputValidation, email, password) {
    setinputValidation(inputValidation => ({ ...inputValidation, Emptyemail: !email }))
    setinputValidation(inputValidation => ({ ...inputValidation, Emptypassword: !password }))

    const CheckEmail = ValidadeEmail(email)
    setinputValidation(inputValidation => ({ ...inputValidation, ValidateEmail: !CheckEmail }))
    return CheckEmail
}

export { 
    Notify,
    ValidadeEmail,
    SignInRequest,
    ValidateInputs,
    errors,
    SignUpRequest
}