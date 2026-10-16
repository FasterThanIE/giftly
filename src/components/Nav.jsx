
import {useState} from "react";

function Nav () {

    const [theme, setTheme ] = useState("light");

    const toggleTheme = () => {
       const newTheme = theme === "light" ? "dark" : "light";
       setTheme(newTheme);
       document.documentElement.setAttribute("data-theme", newTheme);
    }

    return (

        <nav>
            <a className="logo" href="#"><i></i>Giftly</a>

            <div className="navlinks">
                <a href="#how">How it works</a>
                <a href="#occasions">Occasions</a>
                <a href="#demo">See a list</a>
                <button className="theme" type="button" onClick={toggleTheme} aria-label="Switch theme">
                    {theme === "light" ? (
                        <svg className="moon" viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>
                    ) : (
                        <svg className="sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
                    )}
                </button>
                <a className="btn btn-primary" href="#start">Create a list</a>

            </div>


        </nav>

    )
}

export default Nav;