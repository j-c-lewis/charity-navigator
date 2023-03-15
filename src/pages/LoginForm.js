import {useRef, useState} from "react";

const LoginForm = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault();

        loginUser(emailRef.current.value,
            passwordRef.current.value)

    }

    const loginUser = (email, password) => {

    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type='email' placeholder={'Enter your Email'}
                ref={emailRef} />

                <input type={'password'} placeholder={'Enter your password'}
                ref={passwordRef}/>

                <input type='submit' value='login' />
            </form>
        </div>
    )
}

export default LoginForm;

