import React, {useState} from "react";
import Modal from "react-modal";
import {Inputs} from "./Inputs";
import Button from 'react-bootstrap/Button';

interface OperatorProps {
    key: string;
    brand: string;
}

export const Operator:React.FC <OperatorProps> = (props) => {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div>
             <a href="#"><span className={props.brand} onClick={() => setShowModal(!showModal)}></span></a>
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
                <Inputs /><br />
                <Button variant="danger" onClick={() => setShowModal(!showModal)}>Закрыть</Button>
            </Modal>
        </div>
    );

}