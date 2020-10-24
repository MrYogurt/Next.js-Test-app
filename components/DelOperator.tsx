import React, {useState} from "react";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';

interface DelOperatorProps {
    DeleteBrand(forSend: string[]): void;
    brand: string[];
}

export const DelOperator:React.FC <DelOperatorProps> = (props) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [opNames, setOpNames] = useState(
        props.brand.map((item) => {
            return { checked: false, name: item, id: item };
        })
    );

    function changeHandler (changeId: string) {
        let newState = opNames.slice();
        let opIndex = newState.findIndex(({ id }) => id === changeId);
        newState[opIndex].checked = !newState[opIndex].checked;
        setOpNames(newState);
    };

    function submitHandler (event: React.MouseEvent<HTMLElement, MouseEvent>) {
        event.preventDefault();
        let newState = opNames.filter(({ checked }) => !checked);
        setOpNames(newState);
        let forSend = opNames.filter(({ checked }) => checked).map((item)=>item.name);
        props.DeleteBrand(forSend);
    };

    return (
        <div>
            <a href="#"><span className="delOp" onClick={() => setShowModal(!showModal)}></span></a>
            <Modal
                className="delOpModal"
                closeTimeoutMS={500}
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={() => setShowModal(!showModal)}
                overlayClassName="Overlay"
            ><div className="outerCheckbox">
                             <form className="a">
                             <div className='vyhyh'>
                                 <br/>
                                 {opNames.map((item) => (
                                     <div key={item.id} className="innerBox">
                                         <input
                                            onChange={() => changeHandler(item.id)}
                                            type="checkbox"
                                            id={item.id}
                                            checked={item.checked}
                                         /></div>))}
                                         </div>
                                         <div className='asdass'>
                                 {opNames.map((item) => (
                                     <div key={item.id} className="innerNamebox"><label htmlFor={item.id}>{item.name}</label></div>))}
                                     </div>
                                 <br />
                             </form>

                         </div>
                <div className="delOpButtons"><Button variant="primary" onClick={submitHandler}>Удалить</Button> <br /><br />
                    <Button variant="danger" onClick={() => setShowModal(!showModal)}>Закрыть</Button></div>


            </Modal>
        </div>
    )
}