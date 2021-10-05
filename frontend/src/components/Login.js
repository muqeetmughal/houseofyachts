import React from 'react';
import "./Login.css";
// import { useEffect } from 'react';
import { useState } from 'react';

import { Redirect } from 'react-router';
import { isExpired } from './ExpiryCheck';
function Login() {

    const [redirect, setRedirect] = useState()
    const [loginError, setloginError] = useState('')
    const [login, setLogin] = useState({
        "username": "",
        "password": ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLogin({
            ...login,
            [name]: value
        })
        setloginError("")
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        loginbyjwt()
        setRedirect(false)

    }

    const loginbyjwt = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(login)
        };
        fetch('/api/token/', requestOptions)
            .then(response => response.json())
            .then(data => {

                if (data.detail === "No active account found with the given credentials") {
                    setloginError("Invalid Login!")
                    setRedirect(false)
                }
                else {
                    localStorage.setItem("access", data.access)
                    localStorage.setItem("refresh", data.refresh)

                    setRedirect(true)

                }

            })
            .catch(err => {
                console.log(err)
            })
    }

    if (redirect) {
        return <Redirect to="/" />;
    }

    const is_expired = isExpired()
    if (is_expired) {
        console.log("Expired")

        return (
            <>

                <main className="form-signin">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                            <input onChange={handleChange} value={login.username} name="username" type="text" className="form-control" id="usernameInput" placeholder="Your Username" />
                            <label>Username</label>
                        </div>
                        <div className="form-floating">
                            <input onChange={handleChange} value={login.password} name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label>Password</label>
                        </div>

                        <button onClick={handleSubmit} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                        {loginError === "" ? "" : <p className="mt-5 mb-3 text-muted">{loginError}</p>}
                    </form>
                </main>
            </>
        )
    } else {
        return <Redirect to="/" />
    }


}

export default Login
