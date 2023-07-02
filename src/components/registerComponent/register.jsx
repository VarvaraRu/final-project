import './register.css'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import axios from '../../api/axios';


const USER_REGEX = /^[?!,.а-яА-ЯёЁ0-9\s]{2,20}$/; 
const PWD_REGEX = /^[A-z][A-z0-9-_]{7,20}$/; 
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

const REGISTER_URL = 'https://sf-final-project-be.herokuapp.com/api/auth/sign_up'
const clientId = '938f3e05-8d84-47c9-8f88-49f663a78bfc'

export const RegisterComponent = () => {
    const userRef = useRef();
    const errRef = useRef(); 

    const [user, setUser] = useState(''); 
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false); 

    const [lastName, setLastName] = useState(''); 
    const [validLastName, setValidLastName] = useState(false);
    const [lastNameFocus, setLastNameFocus] = useState(false); 

    const [pwd, setPwd] = useState(''); 
    const [validPwd, setValidPwd] = useState(false); 
    const [pwdFocus, setPwdFocus] = useState(false); 

    const [email, setEmail] = useState(''); 
    const [validEmail, setValidEmail] = useState(false); 
    const [emailFocus, setEmailFocus] = useState(false); 

    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); 

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user); 
        setValidName(result); 
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email); 
        setValidEmail(result); 
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd); 
        setValidPwd(result); 
    }, [pwd])

    useEffect(() => {
        const result = USER_REGEX.test(lastName); 
        setValidLastName(result); 
    }, [lastName])

    useEffect(() => {
        setErrMsg(''); 
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({password: pwd, email: email, clientId: clientId}), 
                {
                    headers: {"Content-Type": "application/json"}, 
                } 
            );
            console.log(response.data)
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Сервер не отвечает")
            } else if (err.response?.status === 409) {
                setErrMsg("Адрес данного почтового ящика уже зарегистрирован");
            } else {
                setErrMsg("Упс, что-то пошло не так. Попробуйте еще раз")
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        {success ? (
            <div className='success_submit_form'>
                <h1>Вы успешно зарегистрировались!</h1>
                    <Link to='/login'>Войти</Link>
            </div>
        ) : (
           <div className='wrapper_for_register_form'>
            <div className='register_form'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <h1>Зарегистрироваться</h1>
                <form onSubmit={handleSubmit} className='submit_form'>
                
                <label htmlFor='useremail' className='label_register_form'>
                    <br/>Почтовый ящик:
                    <span className={validEmail ? "valid" : "hide"}>&#9989;</span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>&#10060;</span>
                    <br/> 
                </label>
                <input 
                    className='input_register'
                    type='email'
                    placeholder='введите адрес вашего почтового ящика'
                    id='useremail'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                    ></input>
                    <p className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                      Некорректно введен адрес почтового ящика
                    </p>

                <label htmlFor='password' className='label_register_form'>
                    <br/>Пароль:
                    <span className={validPwd ? "valid" : "hide"}>&#9989;</span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>&#10060;</span>
                    <br/>
                </label>
                <input 
                    className='input_register'
                    type='password'
                    placeholder='придумайте пароль'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    required
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                ></input>
                <p className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    От 8 и до 20 символов.
                </p>

                <label htmlFor='username' className='label_register_form'>
                    <br/>Имя:
                    <span className={validName ? "valid" : "hide"}>&#9989;</span>
                    <span className={validName || !user ? "hide" : "invalid"}>&#10060;</span>
                    <br/> 
                </label>
                <input 
                    className='input_register'
                    type='text'
                    placeholder='введите имя'
                    id='username'
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    required
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    ></input>
                    <p className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                      От 2 до 20 символов. Только кириллица. 
                    </p>

                <label htmlFor='userlastname' className='label_register_form'>
                    <br/>Фамилия:
                    <span className={validLastName ? "valid" : "hide"}>&#9989;</span>
                    <span className={validLastName || !lastName ? "hide" : "invalid"}>&#10060;</span>
                    <br/> 
                </label>  
                <input 
                    className='input_register'
                    type='text'
                    placeholder='введите фамилию'
                    id='userlastname'
                    autoComplete='off'
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    onFocus={() => setLastNameFocus(true)}
                    onBlur={() => setLastNameFocus(false)}
                ></input>
                    <p className={lastNameFocus && lastName && !validLastName ? "instructions" : "offscreen"}>
                        От 2 до 20 символов. Только кириллица. 
                    </p>
                <button className="button_in_register_form" disabled={!validName || !validPwd || !validEmail ? true : false}><span className='text_in_button'>Создать аккаунт</span></button>
                </form>
              
                {/* <label class="checkbox_in_register_form"><input type="checkbox" value="yes" className="checkbox1"></input>Одобрен</label> */}
                 <p className='text_with_link'>Есть аккаунт? <Link to='/login'>Войти</Link></p>
            </div>
        </div>
        )}
        </>
    )
}