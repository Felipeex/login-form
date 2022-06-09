import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../Auth/Context";

const RoutesPrivate = ({ children }) => {
  const { token } = useContext(AuthContext);

  return token ? children : <Navigate to="/login" />;
};

export default RoutesPrivate;