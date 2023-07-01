import './login.css'; 
import { ButtonInLoginForm } from '../buttons/buttonInLoginForm';
import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';

export const Login = () => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [emailDirty, setEmailDirty] = useState(false)
    // const [passwordDirty, setPasswordDirty] = useState(false)
    // const [emailError, setEmailError] = useState('Пожалуйста, заполните адрес почтовый ящик')
    // const [passwordError, setPasswordError] = useState('Пожалуйста, заполните пароль')
    // const [formValid, setFormValid] = useState(false)

    // useEffect (() => {
    //     if (emailError || passwordError) {
    //         setFormValid(false)
    //     } else {
    //         setFormValid(true)
    //     }
    // }, [emailError, passwordError])

    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'email' :
    //             setEmailDirty(true)
    //             break
    //         case 'password' :
    //             setPasswordDirty(true)
    //             break
    //     }
    // }

    // const emailHandler = (e) => {
    //     setEmail(e.target.value)
    //     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //     if(!re.test(String(e.target.value).toLowerCase())){
    //         setEmailError('Некорректно введен адрес почтового ящика')
    //     } else {
    //         setEmailError('')
    //     }
    // }

    // const passwordHandler = (e) => {
    //     setPassword(e.target.value)
    //     if (e.target.value.length < 5 || e.target.value.length > 20) {
    //         setPasswordError('Пароль должен быть не менее 5, и не более 20 символов')
    //         if(!e.target.value) {
    //             setPasswordError('Пароль не может быть пустым')
    //         }
    //     } else {
    //         setPasswordError('')
    //     }
    // }

    return (
        <div className='wrapper_for_login_form'>
            <div className='login_form'>
                <h1>Вход</h1>
                <input className='input_login'
                    // value={email}
                    name='email'
                    type='email'
                    placeholder='введите почтовый ящик'
                    // onBlur = {e => blurHandler(e)}
                    // onChange = {e => emailHandler(e)}
                    ></input> 
                    {/* {(emailDirty && emailError) && <div className='vaidation_error'>{emailError}</div>} */}
                <input className='input_login'
                    // value={password}
                    name='password'
                    type='password'
                    placeholder='введите пароль'
                    // onBlur = {e => blurHandler(e)}
                    // onChange = {e => passwordHandler(e)}
                    ></input>
                    {/* {(passwordDirty && passwordError) && <div className='vaidation_error'>{passwordError}</div>} */}
                    <ButtonInLoginForm/>
                    <p className='text_with_link'>Нет аккаунта? <Link to='/register'>Создать</Link></p>
            </div>
        </div>
    )
}