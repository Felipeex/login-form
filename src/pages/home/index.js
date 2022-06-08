import "./index.css"

import side_image from "../images/side-image.jpg"
import log_in from "../images/log-in.svg"
import logo from "../images/logo.svg"


export default function Home() {
    return (
        <div className="container">
            <section className="container-form">
                <header>
                    <img src={logo} alt="Logo marcar camp."></img>
                </header>

                <form>
                    <div>
                        <div>
                            <div className="flex">
                                <img src={log_in} alt="Simbolo de Login"></img>
                                <h1>Faça seu login</h1>
                            </div>

                            <h2>Entre com suas informações de cadastro.</h2>
                        </div>

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
                        <h6>Não tem uma conta? <span>Registre-se</span></h6>
                    </div>
                </form>
            </section>

            <section className="container-image">
                <img src={side_image} alt="Uma paisagem com um carro de acampamento."></img>
            </section>
        </div>
    )
}