/* imports */
import { useEffect } from "react";
import { Notify } from "../../services/utils/functions";
import api from "../../services/api";
import useStorage from "../../services/utils/useStorage";
import AuthContext from "./Context";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useStorage("token");

  useEffect(() => {
    const ValidateToken = async () => {
      if (token) {
        try {
          await api.post("validate-token", { }, {
              headers: {
                authorization: token,
              },
            }
          );
        } catch (err) {
          setToken("");
          Notify("error", "Sessão inspirada.");
        }
      }
    };

    ValidateToken();
  }, [token, setToken]);

  return (
    <AuthContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
