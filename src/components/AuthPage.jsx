

import {useState} from "react";

function AuthPage() {

    const [theme, setTheme] = useState("light");
    const [tab, setTab] = useState("login");
    const [showPass, setShowPass ] = useState(false);
    const [signUpPass, setSignUpPass] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [loginError, setLoginError] = useState("");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPass) {
            setLoginError("Please fill in all fields.")
            return;
        }

        if (!/\S+@\S+\.\S+/.test(loginEmail)) {
            setLoginError("Please enter a valid email.")
            return;
        }

        setLoginError("")
    }

    let s = 0;
    if (signUpPass.length >= 8) s++;
    if (/\d/.test(signUpPass)) s++;
    if (/[^A-Za-z0-9]/.test(signUpPass)) s++;
    if (signUpPass.length >= 12 && /[A-Z]/.test(signUpPass) ) s++;

    return (

        <div className="shell">
            <aside className="brand">

                <a className="logo" href="#"><i></i>Giftly</a>
                <div className="pitch">
                    <h2>The gifts you’d love, <em>none twice.</em></h2>
                    <p>Make a wish list for your wedding, baby or birthday. Guests claim a gift or chip in to a fund.</p>
                </div>

                <div className="peek">

                    <span className="ribbon"></span>
                    <span className="eyebrow">Ana & Luka · 12 June</span>
                    <h3>Our wedding wish list</h3>
                    <div className="row">
                      <span>Stand mixer</span>
                        <span className="pill done">Claimed</span>
                    </div>
                    <div className="row">
                      <span>Linen bedding set</span>
                        <span className="pill">Available</span>
                    </div>
                    <div className="row">
                      <span>Honeymoon fund</span>
                        <span className="pill done">€1,240 of €2,000</span>
                    </div>

                </div>

                <p className="quote"><b>Free for hosts.</b> Guests don't need an account to claim a gift.</p>
                <span className="dots"></span>

            </aside>

            <main className="side">
                <div className="top">
                    <span>New to Giftly?</span>
                    <button className="theme" type="button" onClick={toggleTheme} aria-label="Switch theme">
                        {theme === "light" ? (
                            <svg className="moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>
                        ) : (
                            <svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
                        )}
                    </button>
                </div>

                <div className="center">
                    <div className="card">
                        <div className="tabs" role="tablist">
                            <button role="tab" aria-selected={tab === "login"} onClick={() => setTab("login")}>Log in</button>
                            <button role="tab" aria-selected={tab === "signup"} onClick={() => setTab("signup")}>Create account</button>
                        </div>

                        {tab === "login" ? (
                            <>
                            <div className="head">
                                <h1>Welcome back</h1>
                                <p>Log in to see who's claimed what.</p>
                            </div>


                                <form noValidate onSubmit={handleLogin}>
                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="field">
                                        <div className="rowline">
                                            <label htmlFor="password">Password</label>
                                            <a href="#">Forgot password?</a>
                                        </div>

                                        <div className="inputwrap">
                                            <input
                                                type={ showPass ? "text" : "password"}
                                                id="password"
                                                name="password"
                                                value={loginPass} onChange={(e) => setLoginPass(e.target.value)}
                                            />

                                            <button
                                                className="peekbtn"
                                                type="button"
                                                onClick={() => setShowPass(!showPass)}
                                            >
                                                {showPass ? "Hide" : "Show"}


                                            </button>
                                        </div>
                                    </div>

                                    <label className="check">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                        />
                                        Keep me logged in
                                    </label>

                                    <button
                                        className="primary"
                                        type="submit"
                                    >
                                        Log in
                                    </button>

                                    <p className="notice">{loginError}</p>

                                </form>
                                <p className="switch">
                                    Don't have an account?{" "}
                                    <button
                                        type="button"
                                        onClick={() => setTab("signup")}
                                    >
                                        Create one
                                    </button>
                                </p>

                            </>

                        ) :
                            (
                                <>
                                    <div className="head">
                                    <h1>Start your wish list</h1>
                                        <p>Free to create. Takes about two minutes.</p>
                                    </div>

                                    <form noValidate>
                                        <div className="field">
                                            <label htmlFor="su_firstName">First name</label>
                                                <input id="su_firstName" name="first_name" autoComplete="given-name" type="text" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="su_lastName">Last name</label>
                                            <input id="su_lastName" name="last_name" autoComplete="family-name" type="text" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="su_email">Email</label>
                                            <input id="su_email" name="email" autoComplete="email" type="email" />
                                        </div>
                                        <div className="field">
                                            <label htmlFor="su_pass">Password</label>
                                            <div className="inputwrap">
                                                <input value={signUpPass} onChange={(e) => setSignUpPass(e.target.value)} id="su_pass" placeholder="At least 8 characters" autoComplete="new-password" name="password"
                                            type={ showPass ? "text" : "password"}
                                            />

                                                <button
                                                className="peekbtn"
                                                type="button"
                                                onClick={() => setShowPass(!showPass)}
                                            >
                                                {showPass ? "Hide" : "Show"}
                                            </button>
                                            </div>

                                            <div className="meter" data-s={s}>
                                            <span></span><span></span><span></span><span></span>
                                        </div>
                                        <span className="hint">{["Use 8+ characters with a number or symbol.", "Weak", "Okay", "Strong", "Very strong"][s]}</span>
                                        </div>

                                        <label className="check">
                                            <input type="checkbox" /><span>I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></span>
                                        </label>

                                        <button className="primary" type="submit">Create account</button>
                                        <p className="notice"></p>

                                    </form>

                                   <p className="switch">Already have an account?
                                       <button type="button" onClick={() => setTab("login")}>Log in</button>
                                   </p>
                                </>

                            )

                        }




                    </div>
                </div>

            </main>

        </div>


    )

}


export default AuthPage;