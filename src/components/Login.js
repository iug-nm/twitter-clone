import React from 'react';

// import { users } from '../data/users';

export default function Login() {
    return(
        <form className='login-form'>
            <input type='text' required></input>
            <input type='password' required></input>
            <input type='submit'></input>
        </form>
    );
};