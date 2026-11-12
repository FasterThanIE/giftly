import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
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

                <button className="primary" type="submit">Send reset link</button>
                <p className="notice">{error}</p>
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