import { toast } from "react-toastify"
import api from "./api"

/* erros de input */
const errors = {
    "Emptyemail": "E-mail é obrigatório",
    "Emptypassword": "Senha é obrigatório",
    "ValidateEmail": "Insira um e-mail válido",

    "RepeatPassword": "As senhas não coincidem",
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

/* request sign-Up */
async function SignInRequest(setIsSubmitRequest, email, password) {
    try {
        setIsSubmitRequest(true)

        await api.post('/signin', { email, password })

        Notify('success', 'Logado com sucesso!')

        setIsSubmitRequest(false)
    } catch (err) {
        setIsSubmitRequest(false)

        const { status, data } = err.response
        if (status === 0)
        return Notify('error', 'Ocorreu um erro.')
        Notify('error', data.error)
    }
}

/* request sign-Up */
async function SignUpRequest(setIsSubmitRequest, setSignup, email, password) {
    try {
        setIsSubmitRequest(true)

        const login = await api.post('/signup', { email, password })
        Notify('success', login.data.message)
        setSignup(false)
        
        setIsSubmitRequest(false)
    } catch (err) {
        setIsSubmitRequest(false)

        if(err.response.status === 0)
        return Notify('error', 'Ocorreu um erro.')
        return Notify('error', err.response.data.error)
    }
}

/* Validar inputs email e senha */

function ValidateInputs(setinputValidation, email, password) {
    setinputValidation(inputValidation => ({ ...inputValidation, Emptyemail: !email }))
    setinputValidation(inputValidation => ({ ...inputValidation, Emptypassword: !password }))

    const CheckEmail = ValidadeEmail(email)
    setinputValidation(inputValidation => ({ ...inputValidation, ValidateEmail: !CheckEmail }))
    return CheckEmail
}

export { Notify, ValidadeEmail, SignInRequest, ValidateInputs, errors, SignUpRequest }