
import {useEffect, useState} from "react";





function Dashboard() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/users/me`, {
                    method: "GET",
                    headers: {"Authorization": `Bearer ${token}`}
                });
                const data = await res.json();
                if (res.ok) {
                    setUser(data.user);
                }
                console.log(data.user);
            } catch (error) {
                console.log(error);

            }
        }
        loadUser();
    }, []);

   return (
       <div>
           {user ? <h1>Welcome {user.firstName} </h1> : <p>Loading...</p> }
       </div>

   )
}

export default Dashboard;