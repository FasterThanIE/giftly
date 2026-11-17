import {getMe, logoutUser} from "../api/auth.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";





function Dashboard() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            try {

                const { ok , data } = await getMe(token);


                if (ok) {
                    setUser(data.user);
                }
                console.log(data.user);
            } catch (error) {
                console.log(error);

            }
        }
        loadUser();
    }, []);

    async function handleLogout() {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
       try{
            await logoutUser(token)



       }catch (error) {
           console.log(error);
       }finally {
           localStorage.removeItem("token");
           sessionStorage.removeItem("token");

           navigate("/login");
       }

    }

   return (
       <div>
           {user ? <h1>Welcome {user.firstName} </h1> : <p>Loading...</p> }
           <button className="primary" onClick={handleLogout}>Log out</button>

       </div>



   )
}

export default Dashboard;