import {getMe, logoutUser} from "../api/auth.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getToken, clearToken} from "../utils/token.js";





function Dashboard() {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUser = async () => {
            const token = getToken();
            try {

                const { ok , status, data } = await getMe(token);

                if (status === 401 || status === 403) {
                    clearToken();
                    navigate("/login");
                    return;
                }


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
        const token = getToken();
       try{
            await logoutUser(token)



       }catch (error) {
           console.log(error);
       }finally {
          clearToken();

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