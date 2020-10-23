import React, {useState} from "react";
import InputMask from "react-input-mask";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Inputs:React.FC = (props) => {

    const [filterSum, setFilterSum] = useState<number>();
    const [inputNumber, setInputNumber] = useState('');
    const [info, setInfo] = useState<string>('Заполните поля');

    function onChangeSearch (e: React.ChangeEvent<HTMLInputElement>) {
        let value: number = parseInt(e.target.value);
        setFilterSum(value);

        if (value <= 0) {
            setFilterSum(value = 1);
        } else if (value >= 1000) {
            setFilterSum(value = 1000);
        }
    }

    function handleInputNumber ({target: {value}}) {
        setInputNumber(value);
    }

    function handleSend (e: React.MouseEvent<HTMLElement, MouseEvent>) {
        e.preventDefault();
        function Random () {
            let random_boolean: boolean = Math.random() >= 0.5;
            if (random_boolean) {
                setInfo('Есть пробитие')
            } else {
                setInfo('Не повезло')
            }
        }

        const numValid = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
        let matchResult = inputNumber.match(numValid);

        if (matchResult == null) {
            setInfo('Номер введен неверно');
        } else if (filterSum <= 0 || filterSum === undefined){
            setInfo('Введите сумму');
        } else {
            setInfo('Ожидание...');
            setTimeout(Random, 1000);
        }
            setInputNumber('');
            setFilterSum(0);
        }
        

    return (
        <div>
            <Form>
                <label>
                    Номер: <InputMask mask="+7(999)999-99-99"
                                      maskChar="_"
                                      alwaysShowMask={true}
                                      type="text" name="number"
                                      value={inputNumber}
                                      onChange={handleInputNumber} /><br />
                </label><br />
                <label>
                    Сумма: <input type="number"
                                  placeholder="От 1 до 1000"
                                  value = {filterSum}
                                  onChange = {onChangeSearch}/>
                </label><br />
                <br />
                <div className="infoMessage">{info}</div>
            </Form><br />
            <Button variant="primary" onClick={handleSend}>Отправить</Button>
        </div>
    );

}