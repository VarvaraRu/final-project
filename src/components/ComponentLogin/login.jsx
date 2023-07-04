import './login.css'; 
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth'

import axios from '../../api/axios'
const LOGIN_URL = 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in'

const PWD_REGEX = /^[A-z][A-z0-9-_]{7,20}$/; 
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


export const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate(); 
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef(); 
    const errRef = useRef(); 

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false); 
    const [emailFocus, setEmailFocus] = useState(false); 
    
    const [pwd, setPwd] = useState(''); 
    const [validPwd, setValidPwd] = useState(false); 
    const [pwdFocus, setPwdFocus] = useState(false); 

    const [errMsg, setErrMsg] = useState(''); 

    useEffect(() => {
        userRef.current.focus(); 
    }, [])

    useEffect(() => {
        setErrMsg(''); 
    }, [email, pwd])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email); 
        setValidEmail(result); 
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd); 
        setValidPwd(result); 
    }, [pwd])

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({password: pwd, email: email}), 
                {
                    headers: {'Content-Type': 'application/json'}
                }
            );
            console.log(JSON.stringify(response?.data));
            const token = response?.data?.token
            const user = response?.data?.user
            setAuth({email, pwd, token, user});
            setEmail('');
            setPwd('');
            navigate(from, {replace: true});
        } catch (err) {
            if(!err?.response){
                setErrMsg('Сервер не отвечает')
            } else {
                setErrMsg('Упс, что-то пошло не так. Попробуйте еще раз')
            }
            errRef.current.focus();
        }  
    }

    return (
        <div className='wrapper_for_login_form'>
            <div className='login_form'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <h1>Вход</h1>
               <form onSubmit={handleSubmit} className='submit_form'>

                <label htmlFor='email' className='label_in_login'>
                    Почтовый ящик: 
                    <span className={validEmail ? "valid" : "hide"}>&#9989;</span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>&#10060;</span>
                    <br/> 
                </label>
                <input 
                    className='input_login'
                    type='email'
                    placeholder='введите почтовый ящик'
                    id='email'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    ></input> 
                    <p className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                        Некорректно введен адрес почтового ящика
                    </p>
                   
                <label htmlFor='password' className='label_in_login'>
                    <br/>Пароль:
                    <span className={validPwd ? "valid" : "hide"}>&#9989;</span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>&#10060;</span>
                    <br/>
                </label>
                <input 
                    className='input_login'
                    type='password'
                    placeholder='введите пароль'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                    ></input> 
                    <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        От 8 и до 20 символов.
                    </p>

                    <button className="button_in_login_form" disabled={!validPwd || !validEmail ? true : false}><span className='text_in_button'>Войти</span></button>
                    </form>
                    <p className='text_with_link'>Нет аккаунта? <Link to='/register'>Создать</Link></p>
            </div>
        </div>
    )
}