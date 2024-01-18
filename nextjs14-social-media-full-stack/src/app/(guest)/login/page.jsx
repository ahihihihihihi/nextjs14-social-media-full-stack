'use client'

import { AuthContext } from "@/context/authContext";
import "./Login.scss";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'


const Login = () => {

    const router = useRouter()

    const { login, currentUser } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    };

    useEffect(() => {
        if (currentUser) {
            router.push("/")
        }
    }, [currentUser])

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span>{`Don't you have an account?`}</span>
                    <Link href="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;