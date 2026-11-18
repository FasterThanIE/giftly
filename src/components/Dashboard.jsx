import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMe, logoutUser } from "../api/auth.js";
import { getToken, clearToken } from "../utils/token.js";

function Dashboard() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            const token = getToken();

            try {
                const { ok, status, data } = await getMe(token);

                if (status === 401 || status === 403) {
                    clearToken();
                    navigate("/login");
                    return;
                }

                if (ok) {
                    setUser(data.user);
                } else {
                    setError(data.error || "Something went wrong.");
                }
            } catch {
                setError("Could not load your profile. Please try again.");
            }
        };

        loadUser();
    }, [navigate]);

    async function handleLogout() {
        const token = getToken();

        try {
            await logoutUser(token);
        } catch {
            // ignorišemo — korisnik se odjavljuje u svakom slučaju
        } finally {
            clearToken();
            navigate("/login");
        }
    }

    return (
        <div className="dash">
            <header className="dash-top">
                <span className="dash-brand">Giftly</span>
                <button className="primary" type="button" onClick={handleLogout}>
                    Log out
                </button>
            </header>

            <main className="dash-main">
                {error ? (
                    <p className="notice">{error}</p>
                ) : user ? (
                    <h1>Welcome, {user.firstName}</h1>
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </div>
    );
}

export default Dashboard;