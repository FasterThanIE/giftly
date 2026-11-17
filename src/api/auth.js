const API_URL = import.meta.env.VITE_API_URL;

export async function loginUser(email, password) {

    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email: email, password: password}),
    })

    const data = await response.json();
    return {ok: response.ok, data};

}


export async function registerUser(firstName, lastName, email, password) {
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({first_name: firstName, last_name: lastName, email, password}),
    })

    const data = await response.json();
    return {ok: response.ok, data, status: response.status};
}



export async function getMe(token) {

    const response = await fetch(`${API_URL}/api/users/me`, {
        method: 'GET',
        headers: {Authorization: `Bearer ${token}`, },
    })

    const data = await response.json();
    return  {ok: response.ok, status: response.status, data }

}


export async function logoutUser(token) {

    const response = await fetch(`${API_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {Authorization: `Bearer ${token}`, },
    })

    const data = await response.json();
    return {ok: response.ok, data};

}