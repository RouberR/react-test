import React from 'react'

function LoginForm() {
    return (
            <form>
                <div>
                    <input placeholder="Login"/>
                </div>
                <div>
                    <input placeholder="Password"/>
                </div>
                <div>
                    <input type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}





function Login() {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
    )
}

export default Login;
