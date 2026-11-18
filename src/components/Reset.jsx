import {useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import {resetPassword} from "../api/auth.js";


function Reset() {

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    async function handleReset(e) {

        e.preventDefault();

        if (!token) {
            setError("Invalid reset link");
            return;
        }


        if (!password || !confirm) {
            setError("Please fill in all fields.");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }


        if (password !== confirm) {
            setError("Passwords do not match.")
            return;
        }
        setLoading(true);
        setError("");
        setMessage("");


        try {

            const {ok, status, data} = await resetPassword(token, password);

            if (status === 401 || status === 403) {
                setError("This reset link is invalid or has expired.")
                return;
            }

            if (ok) {
                setMessage("Password updated. You can now log in");
            } else {
                setError(data.error || "Something went wrong.")
            }


        } catch {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);

        }


    }

    return (

        <div className="authwrap">
            <div className="card">
                <div className="head">
                    <h1>Set a new password</h1>
                    <p>Choose a new password for your account</p>
                </div>

                <form noValidate onSubmit={handleReset}>
                    <div className="field">
                        <label htmlFor="password">Enter new password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>

                    <div className="field">
                        <label htmlFor="confirm">Confirm password</label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}

                        />
                    </div>

                    <button className="primary" type="submit" disabled={loading}>
                        {loading ? "Saving..." : "Reset password"}
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


    )

}

export default Reset;