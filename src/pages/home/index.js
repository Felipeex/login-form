/* imports */
import { useContext } from "react";
import AuthContext from "../../components/Auth/Context";
import "./index.css";

const Home = () => {
  const { setToken } = useContext(AuthContext);

  function Logoff() {
    setToken("");
  }

  return (
    <>
      <main>
        <button onClick={Logoff}>SAIR</button>
      </main>
    </>
  );
};

export default Home;
