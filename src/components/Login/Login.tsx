import React, { useState } from "react";

export default function Login() {

    interface User {
        email: string,
        password: string,
    }

    const [user, setUser] = useState<User>({ email: "", password: "" });

    const { email, password } = user;

    const login = (user: User) => {
        console.log(`My user is ${user}`);
        const { email, password } = user;
        alert(`${email}, ${password}`);
    }

    const handleSubmit = () => {
        console.log("Handling submit!!");
        login(user);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setUser({ ...user, email: event.target.value });
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setUser({ ...user, password: event.target.value });
    }
    return (
        <>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <div>

                    <label htmlFor="email">
                        Email: <input type="text" name="email" value={email} onChange={(e) => { handleEmailChange(e) }} />
                    </label>
                </div>
                <div>

                    <label htmlFor="Password">
                        Password: <input type="text" name="password" value={password} onChange={(e) => handlePasswordChange(e)} />
                    </label>
                </div>
                <input type="submit" value="Sign in" />
            </form>
        </>
    )
}
