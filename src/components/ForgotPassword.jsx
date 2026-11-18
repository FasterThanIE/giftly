import { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../api/auth.js";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading , setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError("Please enter your email.");
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email.");
            return;
        }
        setError("");
        setMessage("");
        setLoading(true);

        try{

            const { ok, data } = await forgotPassword(email);

            if (ok) {
                setMessage(data.message);
            } else{
                setError(data.error || "Something went wrong.");
            }

        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="authwrap">
        <div className="card">
            <div className="head">
                <h1>Reset your password</h1>
                <p>Enter your email and we'll send you a reset link.</p>
            </div>

            <form noValidate onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                </div>

                <button className="primary" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send reset link"}
                </button>
                <p className="notice">{error}</p>
                <p className="notice">{message}</p>
            </form>

            <p className="switch">
                Remember your password?{" "}
                <Link to="/login">Log in</Link>
            </p>
        </div>
        </div>
    );
}

export default ForgotPassword;