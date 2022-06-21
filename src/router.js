/* imports */
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/* components */
import AuthProvider from "./components/Auth/Provider";
import RoutesPrivate from "./components/routers/private";

/* pages */
import LazyPage from "./pages/lazypage";
const Home = lazy(() => import("./pages/home"));
const Login = lazy(() => import("./pages/Login"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LazyPage />}>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<RoutesPrivate> <Home/> </RoutesPrivate> }/>
          </Routes>
        </AuthProvider>
      </Suspense>
    </Router>
  );
}