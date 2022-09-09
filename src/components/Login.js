import React from 'react';

import { users } from '../data/users';

export default function Login() {

    const checklogin = (users, nickname, password) => {
        
    }
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