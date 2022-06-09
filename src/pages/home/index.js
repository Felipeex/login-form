/* imports */
import { useState } from "react";
import "./index.css";

/* components */
import SignIn from "../../components/SignIn";
import Header from "../../components/Header";
import HomeImage from "../../components/HomeImage";
import SignUp from "../../components/SignUp";

/* notify */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [isSignup, SetIsSignUp] = useState(false);

  return (
    <div className="container">
      <ToastContainer />
      <section className="container-form">
        <Header />

        <form>
          {!isSignup ? (
            <SignIn SetIsSignUp={SetIsSignUp} />
          ) : (
            <SignUp SetIsSignUp={SetIsSignUp} />
          )}
        </form>
      </section>

      <HomeImage />
    </div>
  );
}
