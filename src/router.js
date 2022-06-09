import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./components/Auth/Provider";
import RoutesPrivate from "./components/routers/private";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RoutesPrivate> <Home/> </RoutesPrivate>}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}