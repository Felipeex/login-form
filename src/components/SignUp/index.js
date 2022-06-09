/* imports */
import { useState } from "react";
import {
  errors,
  Notify,
  SignUpRequest,
  ValidateInputs,
} from "../../services/utils/functions";

/* images */
import LogIn from "../../pages/images/log-in.svg";

/* components */
import Loading from "../Loading";

export const SignUp = ({ SetIsSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [inputValidation, setinputValidation] = useState({});
  const [IsSubmitRequest, setIsSubmitRequest] = useState(false);

  async function SignUp() {
    const Validate =
      ValidateInputs(setinputValidation, email, password, repeatPassword) ||
      false;

    if (!!Validate && !!password && password === repeatPassword) {
      setIsSubmitRequest(true);
      try {
        const loginSuccess = await SignUpRequest(email, password);
        Notify("success", loginSuccess.data.message);
        SetIsSignUp(false);
      } catch (err) {
        Notify("error", err.message);
      }
      setIsSubmitRequest(false);
    }
  }

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
    {
      title: "Confirmar Senha",
      type: "password",
      ClassName: "Password",
      placeholder: "Digite seu senha",
      onChange: ({ target }) => setRepeatPassword(target.value),
      children:
        password !== repeatPassword ? <span>{errors.RepeatPassword}</span> : "",
    },
  ];

  return (
    <>
      <div className="flex">
        <img src={LogIn} alt="Simbolo de Login"></img>
        <h1>Crie sua Conta</h1>
      </div>

      <h2>Entre com suas informações de cadastro.</h2>

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

      <button
        onClick={(e) => SignUp(e.preventDefault())}
        disabled={IsSubmitRequest}
      >
        {IsSubmitRequest ? <Loading /> : "ENTRAR"}
      </button>

      <h6>
        já tem uma conta?{" "}
        <span onClick={() => SetIsSignUp(false)}>Fazer Login</span>
      </h6>
    </>
  );
};

export default SignUp;
