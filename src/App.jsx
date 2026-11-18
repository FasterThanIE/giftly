import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import AuthPage from "./components/AuthPage.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Reset from "./components/Reset.jsx";
import Dashboard from "./components/Dashboard.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/signup" element={<AuthPage />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/reset" element={<Reset />} />
            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;