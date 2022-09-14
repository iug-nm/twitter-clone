import React from 'react';

export default function Login() {

    return(
        <div id="login">
            <form className='login-form'>
                <input type='text' required></input>
                <input type='password' required></input>
                <input type='submit'></input>
            </form>
        </div>
    );
};