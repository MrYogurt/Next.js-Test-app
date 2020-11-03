import React, {useState} from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Operator} from '../components/Operator';
import {AddOperator} from '../components/AddOperator';
import {DelOperator} from '../components/DelOperator';


Modal.setAppElement('#__next');

const MassViewer:React.FC = (props) => {

    const [checkInput, setCheckInput] = useState<string>('Заполните поле');
    const [opNames, setOpNames] = useState<string[]>(["МТС", "Билайн", "Мегафон"]);

    function AddBrand (name: string) {
        let array: string[] = opNames.slice();
        
            function checkAvailability(array: string[], name: string) {
                return array.some(function(arrVal) {
                    return name === arrVal;
                });
            }
            if (checkAvailability(array, name) === false) {
                setOpNames([...opNames, name]);
                setCheckInput('Добавлено');
                
            } else {
                setCheckInput('Такой оператор уже есть');
            }
    }

    function ElementList({opNames}) {
        return opNames.map((name: string) => (
            <Operator key={name} brand={name}/>
    ));
    }

    function DeleteBrand (name: string[]) {
        let array2: string[] = opNames.slice();
        name.forEach(function(elem: string) {
            for (let i = 0, len = array2.length; i < len; i++) {
                if (array2[i] === elem) {
                    array2.splice(i, 1);
                    break;
                }
            }
        });
        setOpNames(array2);
    }

    // почему то получаю краш при стайлинге контейнеров здесь и в соседнем компоненте

    return (
        <div className="allContainers">
            <div className="opNames">
                <ElementList opNames={opNames} />
                <AddOperator AddBrand={AddBrand} message={checkInput}/>
                <DelOperator DeleteBrand={DeleteBrand} brand={opNames} />
            </div>
            </div>
);
}

const MyApp:React.FC = () => {
    return (
        <div>
            <div className="divTitle"> <h2>Выберите оператора для оплаты</h2></div>
            <div>
                <MassViewer />
            </div>
        </div>
)
}

export default MyApp;