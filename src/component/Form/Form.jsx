import React, { useEffect, useState } from 'react';
import './Form.css'
import useTelegram from '../../hooks/useTelegram';

const Form = () => {
    const [country, setCountry] = useState() 
    const [city, setCity] = useState() 
    const [subject, setSubject] = useState() 
    const {tg} = useTelegram()

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить"
        })
    })
    useEffect(() => {
        if(!country || !city) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show();
        }
    })

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeSubject = (e) => {
      setSubject(e.target.value);
    };
    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input onChange={onChangeCountry} value={country} type='text' className={'input'} placeholder='Введите страну' />
            <input onChange={onChangeCity} value={city} type='text' className={'input'} placeholder='Введите город' />
            <select onChange={onChangeSubject} value={subject} className={'select'}>
                <option value={'physical'}>Физ.лицо</option>
                <option value={'legal'}>Юр.лицо</option>
            </select>
            <p>{country} {city} {subject}</p>
        </div>
    );
};

export default Form;