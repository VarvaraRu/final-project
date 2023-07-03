import './report.css'
import { ButtonSubmitReport } from '../buttons/buttonSubmitReport'
import Select from 'react-select'

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

export const Report = () => {
    return (
        <div className='wrapper_for_report_form'>
            <div className='report_form'>
                <label className='label_in_report_form'>ФИО владельца
                    <input className='input_in_report_form' placeholder='введите ФИО'
                    ></input>
                </label>
                <label className='label_in_report_form'>Номер лицензии
                    <input className='input_in_report_form' placeholder='введите номер лицензии'
                    ></input>
                </label>
                <label className='label_in_report_form'>Дата кражи
                    <input className='input_in_report_form'
                        type='date'
                    ></input>
                </label>
                <label className='label_in_report_form'>Тип велосипеда
                    <Select className='select_report' placeholder='выберите' options={typeOptions}/>
                </label>
                <label className='label_in_report_form'>Цвет велосипеда
                    <Select className='select_report' placeholder='выберите' options={colorOptions}/>
                </label>
                <label className='label_in_report_form'>Дополнительные сведения
                    <textarea className='comment_in_report_form' rows="5" cols="50" placeholder='введите комментарий'></textarea>
                </label>
                <ButtonSubmitReport/>
            </div>
        </div>
    )
}