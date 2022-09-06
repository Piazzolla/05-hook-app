import { useState, useEffect } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

   // const { username, email, password} = formState;

    useEffect(() => {
        // console.log('useEffect called!'); //si se llama dos veces es porque tengo StrictMode en main
    }, []);

    useEffect(() => {
        // console.log('formState changed'); 
    }, [formState]);

    useEffect(() => {
        // console.log('email changed'); 
    }, [email]);


    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="mariano@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Contrasenia"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">borrar</button>

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}