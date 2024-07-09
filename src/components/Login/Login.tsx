import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { loginCredentials } from "../../App.types";
import { login } from "../../features/auth.slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function Login() {
    const [user, setUser] = useState<loginCredentials>({ email: "", password: "" });
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const error = useAppSelector(state => state.auth.error)

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await dispatch(login(user)).then((res) => {
            // if the credentials are wrong, alert the user
            if (!res.payload && res.type === 'user/login/rejected') {
                return alert(`Invalid credentials! \n ${error}`);
            }
            // on login sucess, navigate to dashboard.
            return navigate("/dashboard");
        },(error) => console.log("here is the biggest error log!!!!!!!!!!!", error)).catch(error => {
            console.log("Error logging in ===>", error);
        });
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, email: event.target.value });
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, password: event.target.value });
    }
    return (
        <>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <div>

                    <label htmlFor="email">
                        Email: <input type="text" name="email" onChange={(e) => { handleEmailChange(e) }} />
                    </label>
                </div>
                <div>

                    <label htmlFor="Password">
                        Password: <input type="text" name="password" onChange={(e) => handlePasswordChange(e)} />
                    </label>
                </div>
                {
                    error ? <p style={{ 'color': 'red' }}>{error}</p> : <p></p>
                }
                <input type="submit" value="Sign in" />
            </form>
        </>
    )
}

