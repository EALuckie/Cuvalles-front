import React from "react";
import '../styles/login.css';
import cuvalles from '../images/cuvalles.jpeg';
import { useNavigate } from "react-router-dom";

function Login() {

    const dirigir = useNavigate();
    const navegar = (e) => {
        e.preventDefault();
        dirigir('/main');
        /* Didn't work yet */
    }

    return (
        <>
        <div className="container">
            <div className="image-background">
                <img src={cuvalles} className="login-photo" />
            </div>
            <div className="form">
                <div className="gap"></div>
                <h1>Inicia sesión</h1>
                <form onSubmit={dirigir}>
                    <label for="username">Username: </label>
                    <input type="text" id="lname" name="lname"></input>
                    <br/>
                    <br/>
                    <label for="username">Password: </label>
                    <input type="text" id="lname" name="lname"></input>
                    <br/>
                    <br/>
                    <input type="submit" name="Login" value="Login"/>
                    <br/>
                    <br/>
                    ¿No eres usuario aún?
                </form>
            </div>
        </div>
        <div className="footer">
            CUVALLES communication system <br/>
            All rights reserved <br/>
        </div>
        </>
    )
}

export default Login