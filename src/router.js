import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./components/Auth/Provider";
import RoutesPrivate from "./components/routers/private";
/* import Home from "./pages/home"; */
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RoutesPrivate> <h1>oi?</h1> </RoutesPrivate>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}