import LogIn from "../../pages/images/log-in.svg"

export default function SignIn({ SetIsSignUp }) {
    return (
        <>
            <div className="flex">
                <img src={LogIn} alt="Simbolo de Login"></img>
                <h1>Faça seu login</h1>
            </div>

            <h2>Lembre suas informações de cadastro.</h2>

            <h3>E-mail</h3>
            <input type="email" placeholder="Digite seu e-mail" />

            <h3>Senha</h3>
            <input type="password" placeholder="Digite sua senha" />

            <div className="checkbox flex">
                <div className="flex">
                    <input type="checkbox" id="remember" className="remember-box" />
                    <label for="remember" class="remember"></label>
                    <h5>Lembre-me</h5>
                </div>
                
                <div className="flex">
                    <h4>Esqueci minha senha</h4>
                </div>
            </div>

            <button>ENTRAR</button>
            <h6>Não tem uma conta? <span onClick={() => SetIsSignUp(true)}>Registre-se</span></h6>
        </>
    )
}