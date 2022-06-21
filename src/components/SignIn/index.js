/* imports */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  errors,
  Notify,
  SignInRequest,
  ValidateInputs,
} from "../../services/utils/functions";

/* images */
import LogIn from "../../pages/images/log-in.svg";

/* components */
import Loading from "../Loading";
import AuthContext from "../Auth/Context";

const SignIn = ({ SetIsSignUp }) => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputValidation, setinputValidation] = useState({});
  const [IsSubmitRequest, setIsSubmitRequest] = useState(false);

  const inputs = [
    {
      title: "E-mail",
      type: "email",
      placeholder: "Digite seu e-mail",
      ClassName: "",
      onChange: ({ target }) => setEmail(target.value),
      children: inputValidation?.Emptyemail ? (
        <span>{errors.Emptyemail}</span>
      ) : inputValidation?.ValidateEmail ? (
        <span>{errors.ValidateEmail}</span>
      ) : (
        ""
      ),
    },
    {
      title: "Senha",
      type: "password",
      ClassName: "Password",
      placeholder: "Digite seu senha",
      onChange: ({ target }) => setPassword(target.value),
      children: inputValidation?.Emptypassword ? (
        <span>{errors.Emptypassword}</span>
      ) : (
        ""
      ),
    },
  ];

  async function LoginIn() {
    const Validate = ValidateInputs(setinputValidation, email, password);

    if (!!Validate && !!password) {
      setIsSubmitRequest(true);
      try {
        const loginSuccess = await SignInRequest(email, password);
        Notify("success", loginSuccess.data.message.status);
        if (loginSuccess.data.message.token) {
          setToken(loginSuccess.data.message.token);
          navigate("/");
        }
      } catch (err) {
        Notify("error", err.message);
      }
      setIsSubmitRequest(false);
    }
  }

  return (
    <>
      <div className="flex">
        <img src={LogIn} alt="Simbolo de Login"></img>
        <h1>Faça seu login</h1>
      </div>

      <h2>Lembre suas informações de cadastro.</h2>

      {inputs.map((index, key) => (
        <div className="inputs" key={index.title}>
          <h3>{index.title}</h3>
          <input
            type={index.type}
            placeholder={index.placeholder}
            onChange={index.onChange}
            className={index.ClassName}
          />
          <br />
          {index.children}
        </div>
      ))}

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
      >
        {IsSubmitRequest ? <Loading /> : "ENTRAR"}
      </button>

      <h6>Não tem uma conta? <span onClick={() => SetIsSignUp(true)}> Registre-se</span></h6>
    </>
  );
};

export default SignIn;