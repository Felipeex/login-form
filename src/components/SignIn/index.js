import { useState } from "react"
import { errors, SignInRequest, ValidateInputs } from "../../services/utils"
import LogIn from "../../pages/images/log-in.svg"
import Loading from "../Loading"

export default function SignIn({ SetIsSignUp }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [inputValidation , setinputValidation] = useState({})
    const [IsSubmitRequest, setIsSubmitRequest] = useState(false)

    async function LoginIn() {
        const Validate = ValidateInputs(setinputValidation, email, password)
        if(Validate) if(password)
        await SignInRequest(setIsSubmitRequest, email, password)
    }

    return (
        <>
            <div className="flex">
                <img src={LogIn} alt="Simbolo de Login"></img>
                <h1>Faça seu login</h1>
            </div>

            <h2>Lembre suas informações de cadastro.</h2>

            <div className="inputs">
                <h3>E-mail</h3>
                <input type="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                { 
                    inputValidation?.Emptyemail ? <span>{errors.Emptyemail}</span> : 
                    inputValidation?.ValidateEmail ? <span>{errors.ValidateEmail}</span> : ''
                }
            </div>

            <div className="inputs">
                <h3>Senha</h3>
                <input type="password" placeholder="Digite sua senha" className="Password" onChange={(e) => setPassword(e.target.value)}/>
                <br/>
                { 
                    inputValidation?.Emptypassword ? <span>{errors.Emptypassword}</span> : ''
                }
            </div>
            
            <div className="checkbox flex">
                <div className="flex">
                    <input type="checkbox" id="remember" className="remember-box" />
                    <label htmlFor="remember" className="remember"></label>
                    <h5>Lembre-me</h5>
                </div>
                
                <div className="flex">
                    <h4>Esqueci minha senha</h4>
                </div>
            </div>

            <button 
            onClick={(e) => LoginIn(e.preventDefault())}
            disabled={IsSubmitRequest}
            >{ IsSubmitRequest ? <Loading /> : 'ENTRAR' }</button>

            <h6>Não tem uma conta? <span onClick={() => SetIsSignUp(true)}>Registre-se</span></h6>
        </>
    )
}