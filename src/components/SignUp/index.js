import { useState } from "react"
import { errors, SignUpRequest, ValidateInputs } from "../../services/utils"
import LogIn from "../../pages/images/log-in.svg"
import Loading from "../Loading"

export default function SignUp({ SetIsSignUp }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [inputValidation , setinputValidation] = useState({})
    const [IsSubmitRequest, setIsSubmitRequest] = useState(false)

    async function SignUp() {
        const Validate = ValidateInputs(setinputValidation, email, password, repeatPassword)
        if(Validate) if(password) if(password === repeatPassword)
        await SignUpRequest(setIsSubmitRequest, SetIsSignUp, email, password)
    }

    const inputs = [
        {
            "title": "E-mail",
            "type": "email",
            "placeholder": "Digite seu e-mail",
            "ClassName": "",
            "onChange": (e) => setEmail(e.target.value),
            "children": inputValidation?.Emptyemail ? <span>{errors.Emptyemail}</span> : inputValidation?.ValidateEmail ? <span>{errors.ValidateEmail}</span> : ''
        },
        {
            "title": "Senha",
            "type": "password",
            "ClassName": "Password",
            "placeholder": "Digite seu senha",
            "onChange": (e) => setPassword(e.target.value),
            "children": inputValidation?.Emptypassword ? <span>{errors.Emptypassword}</span> : ''
        },
        {
            "title": "Confirmar Senha",
            "type": "password",
            "ClassName": "Password",
            "placeholder": "Digite seu senha",
            "onChange": (e) => setRepeatPassword(e.target.value),
            "children": password !== repeatPassword ? <span>{errors.RepeatPassword}</span> : ''
        },
    ]

    return (
        <>
        <div className="flex">
            <img src={LogIn} alt="Simbolo de Login"></img>
            <h1>Crie sua Conta</h1>
        </div>

        <h2>Entre com suas informações de cadastro.</h2>

        { inputs.map((index, key) => (
                <div className="inputs" key={index.title}>
                    <h3>{index.title}</h3>
                    <input type={index.type} placeholder={index.placeholder} onChange={index.onChange} className={index.ClassName}/>
                    <br/>
                    {index.children}
                </div>
            ))
        }

        <button
        onClick={(e) => SignUp(e.preventDefault())}
        disabled={IsSubmitRequest}
        >
        { IsSubmitRequest ? <Loading /> : 'ENTRAR' }
        </button>

        <h6>já tem uma conta? <span onClick={() => SetIsSignUp(false)}>Fazer Login</span></h6>
        </>
    )
}