import React, {useState} from "react";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';

interface AddOperatorProps {
    AddBrand(inputResult: string): void;
    message: string;
}

export const AddOperator:React.FC <AddOperatorProps> = (props) => {

    const [inputOp, setInputOp] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [message2, setMessage2] = useState<string>(props.message);

    function onChangeSearch (e: React.ChangeEvent<HTMLInputElement>) {
        let value: string = e.target.value;
        value = value.substring(0, 10);
        setInputOp(value);
    }

    function handleAddOp (e: React.MouseEvent<HTMLElement, MouseEvent>) {
        e.preventDefault();
        const inputResult: string = inputOp.slice();

        if (inputResult.length >= 1) {
            props.AddBrand(inputResult);
            setInputOp('');
            setMessage2(props.message);
        } else {
            setMessage2('Вы не заполнили поле');
            setInputOp('')
        }
    }

    return (
        <div className="addOp">
            <a href="#"><span className="newOp" onClick={() => setShowModal(!showModal)}></span></a>
            <Modal
                className="defaultModal"
                closeTimeoutMS={500}
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={() => setShowModal(!showModal)}
                overlayClassName="Overlay"
            >
                <form>
                    <br />
                    <h2><p>Добавить оператора</p></h2>
                    <label>
                        Название: <input value={inputOp} onChange={onChangeSearch} placeholder="Максимум 10 символов"/>
                    </label><br />
                </form><br />
                <div>{message2}</div><br />
                <Button variant="primary" onClick={handleAddOp}>Добавить</Button><br/><br/>
                <Button variant="danger" onClick={() => setShowModal(!showModal)}>Закрыть</Button>
            </Modal>
        </div>
    )
}