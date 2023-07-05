import './report.css'
import Select from 'react-select'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../api/axios'
const REPORT_URL = 'https://sf-final-project-be.herokuapp.com/api/public/report'
const clientId = '938f3e05-8d84-47c9-8f88-49f663a78bfc'

const typeOptions = [
    {value: 'General', label: 'General'},
    {value: 'Sport', label: 'Sport'}
];
const colorOptions = [
    {value: 'Черный', label: 'Черный'},
    {value: 'Белый', label: 'Белый'},
    {value: 'Серый', label: 'Серый'},
    {value: 'Зеленый', label: 'Зеленый'},
    {value: 'Красный', label: 'Красный'},
    {value: 'Оранжевый', label: 'Оранжевый'},
    {value: 'Фиолетовый', label: 'Фиолетовый'},
    {value: 'Желтый', label: 'Желтый'},
    {value: 'Бирюзовый', label: 'Бирюзовый'},
    {value: 'Синий', label: 'Синий'},
    {value: 'Голубой', label: 'Голубой'},
    {value: 'Коричневый', label: 'Коричневый'},
    {value: 'Розовый', label: 'Розовый'}
];

const NAME_REGEX = /^[?!,.а-яА-ЯёЁ0-9\s]{2,50}$/; 
const LICENSE_REGEX = /^[A-Za-z0-9]{12}$/;

export const Report = () => {
    const errRef = useRef(); 
    const nameRef = useRef(); 

    // Обязательные пункты 
    const [license, setLicense] = useState('')
    const [licenseFocus, setLicenseFocus] = useState(false); 
    const [validLicense, setValidLicense] = useState(false); 

    const [name, setName] = useState('')
    const [nameFocus, setNameFocus] = useState(false); 
    const [validName, setValidName] = useState(false); 

    const [typeBicycle, setBicycleType] = useState('')
    const [typeBicycleFocus, setBicycleTypeFocus] = useState(false); 
    const [validTypeBicycle, setValidTypeBicycle] = useState(false); 

    // Дополнительная информация к созданию сообщения о краже
    const [date, setDate] = useState('')
    const [color, setColor] = useState('')
    const [addedInfo, setAddedInfo] = useState('')


    const [errMsg, setErrMsg] = useState(''); 
    const [success, setSuccess] = useState(false); 

    useEffect(() => {
        const result = NAME_REGEX.test(name); 
        setValidName(result); 
    }, [name])

    useEffect(() => {
        const result = LICENSE_REGEX.test(license); 
        setValidLicense(result); 
    }, [license])

    useEffect(() => {
        if (typeBicycle !== '') {
            setValidTypeBicycle(true);
        }
    }, [typeBicycle])

    useEffect(() => {
        setErrMsg(''); 
    }, [name, license, typeBicycle])

    const handleSubmit = async (e) => {
        e.prevent.Default(); 

        try {
            const response = await axios.post(REPORT_URL,
                JSON.stringify({clientId: clientId, ownerFullName: name, licenseNumber: license, type: typeBicycle, color: color, date: date, description: addedInfo}), 
                {
                    headers: {"Content-Type": "application/json"}
                }
            );
            console.log(response.data)
            setSuccess(true); 
        } catch (err) {
            if (!err?.response) {
                setErrMsg("Сервер не отвечает")
            } else {
                setErrMsg("Упс, что-то пошло не так. Попробуйте еще раз")
            }
            }
        }

    return (
        <>
        {success ? ( 
            <div className='success_submit_form'>
            <h1>Заявка успешно оформлена!</h1>
                <Link to='/'>Вернуться на главную страницу</Link>
        </div>
    ) : (
        <div className='wrapper_for_report_form'>
            <div className='report_form'>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                <h1>Cообщить о краже</h1>
                <form onSubmit={handleSubmit} className='submit_form'>
                    
                    <label htmlFor='name' className='label_in_report_form'>
                        ФИО владельца <span className='attention'>*</span>
                        <span className={validName ? "valid" : "hide"}>&#9989;</span>
                        <span className={validName || !name ? "hide" : "invalid"}>&#10060;</span>
                        <input 
                        className='input_in_report_form' 
                        placeholder='введите ФИО'
                        type='text'
                        ref={nameRef}
                        id='name'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                        ></input>
                    </label>
                    <p className={nameFocus && name && !validName ? "instructions" : "offscreen"}>
                      От 2 до 50 символов. Только кириллица. 
                    </p>

                    <label htmlFor='license' className='label_in_report_form'>
                        Номер лицензии <span className='attention'>*</span>
                        <span className={validLicense ? "valid" : "hide"}>&#9989;</span>
                        <span className={validLicense || !license ? "hide" : "invalid"}>&#10060;</span>
                        <input 
                        className='input_in_report_form' 
                        placeholder='введите номер лицензии'
                        type='text'
                        id='license'
                        onChange={(e) => setLicense(e.target.value)}
                        value={license}
                        required
                        onFocus={() => setLicenseFocus(true)}
                        onBlur={() => setLicenseFocus(false)}
                        ></input>
                    </label>
                    <p className={licenseFocus && license && !validLicense ? "instructions" : "offscreen"}>
                      Лицензия состоит из 12 символов. Цифры и латиница. 
                    </p>


                    <label className='label_in_report_form'>Дата кражи
                        <input 
                            className='input_in_report_form'
                            type='date'
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                        ></input>
                    </label>

                    <label htmlFor='bicycletype' className='label_in_report_form'>
                        Тип велосипеда<span className='attention'>*</span>
                        <span className={validTypeBicycle ? "valid" : "hide"}>&#9989;</span>
                        <span className={validTypeBicycle || !typeBicycle ? "hide" : "invalid"}>&#10060;</span>
                        <Select 
                        className='select_report' 
                        placeholder='выберите' 
                        id='bicycletype'
                        options={typeOptions}
                        value={typeBicycle}
                        onChange={(e) => setBicycleType(e)}
                        required
                        onFocus={() => setBicycleTypeFocus(true)}
                        onBlur={() => setBicycleTypeFocus(false)}
                        />
                    </label>
                    <p className={typeBicycleFocus && typeBicycle && !validTypeBicycle ? "instructions" : "offscreen"}>
                      Выберите один из предложенных вариантов
                    </p>

                    <label className='label_in_report_form'>Цвет велосипеда
                        <Select 
                            className='select_report' 
                            placeholder='выберите' 
                            options={colorOptions}
                            onChange={(e) => setColor(e)}
                            value={color}
                            />
                    </label>

                    <label className='label_in_report_form'>Дополнительные сведения
                        <textarea 
                            className='comment_in_report_form' 
                            rows="5" 
                            cols="50"
                            placeholder='введите комментарий'
                            onChange={(e) => setAddedInfo(e)}
                            value={addedInfo}
                        ></textarea>
                    </label>
                    
                    <br/>
                    <span className='attention'>Поля, помеченные * обязательны для заполнения</span>
                    <br/>

                    <button type="submit" className='button_submit_form' disabled={!validName || !validLicense || !validTypeBicycle ? true : false}><span className='text_in_button'>Отправить</span></button>
                </form>
            </div>
        </div>
        )}
        </>
    )
}