
import {useState} from "react";
import {Link} from  "react-router-dom";


 function Reset () {

    const [password, setPassword] = useState("");
    const [confirm , setConfirm] = useState("");
    const [error, setError] = useState("");

    function handleReset(e) {

            e.preventDefault();
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



            setError("");



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

                    <button className="primary" type="submit">Reset password</button>
                    <p className="notice">{error}</p>


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