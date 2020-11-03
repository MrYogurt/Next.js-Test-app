import React, {useState} from "react";
import styled from 'styled-components';
import Modal from "react-modal";
import {Inputs} from "./Inputs";
import Button from 'react-bootstrap/Button';


interface OperatorProps {
    key: string;
    brand: string;
}

export const Operator:React.FC <OperatorProps> = (props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const link: string = 'imgs/' + props.brand + '.png';

    const Img = styled.img`
        width: 200px;
        height: 200px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        margin: 50px;
        border-radius: 50px;
        display: flex ;
    `;

    // img не получилось застайлить здесь, из за краша кода, проблема не у меня одного, но решения не нашел.

    return (
        <div>
             <a href="#"><img src={link} className="OpBlock" onClick={() => setShowModal(!showModal)}></img></a>
            <Modal
                className="defaultModal"
                closeTimeoutMS={500}
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={() => setShowModal(!showModal)}
                overlayClassName="Overlay"
            >
                <br />
                <h2><p>Оплата {props.brand}</p></h2>
                <Inputs />
                <Button variant="danger" onClick={() => setShowModal(!showModal)}>Закрыть</Button>
            </Modal>
        </div>
    );

}