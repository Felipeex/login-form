import LogIn from "../../pages/images/log-in.svg"

export default function SignUp({ SetIsSignUp }) {
    return (
        <>
            <div className="flex">
                <img src={LogIn} alt="Simbolo de Login"></img>
                <h1>Crie sua Conta</h1>
            </div>

            <h2>Entre com suas informações de cadastro.</h2>

            <h3>E-mail</h3>
            <input type="email" placeholder="Digite seu e-mail" />

            <h3>Senha</h3>
            <input type="password" placeholder="Digite sua senha" />

            <h3>Confirmar Senha</h3>
            <input type="password" placeholder="Digite sua senha" className="repeatPassword"/>

            <button>CADASTRAR</button>
            <h6>já tem uma conta? <span onClick={() => SetIsSignUp(false)}>Fazer Login</span></h6>
        </>
    )
}