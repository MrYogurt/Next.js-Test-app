import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

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

    useEffect(() => {
        newData();
    }, [props.brand]);

    const Checkbox = styled.div`
    overflow: auto;
    max-height: 238px;
    max-width: 270px;
    `;

    const Form = styled.form`
    display: flex;
    justify-content: space-around;
    `;

    const InnerBox = styled.div`
    display: flex;
    margin-top: 5px;
    `;

    const InnerNameBox = styled.div`
    margin-left: -50px;
    margin-bottom: 5px;
    display: flex;
    line-height: 21px;
    `;

    const Asdass = styled.div`
    margin-top: 30px;
    `;

    const DelOpButtons = styled.div`
    margin-top: 40px;
    text-align: center;
    `;

    function newData () {
        setOpNames(props.brand.map((item) => {
            return {checked: false, name: item, id: item};
        }));
    }

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

    // img не получилось застайлить здесь, из за краша кода, проблема не у меня одного, но решения не нашел.
    
    return (
        <div>
            <a href="#"><img src="imgs/delop.png" className="OpBlock" onClick={() => setShowModal(!showModal)}></img></a>
            <Modal
                className="delOpModal"
                closeTimeoutMS={500}
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={() => setShowModal(!showModal)}
                overlayClassName="Overlay"
            >
                <Checkbox>
                             <Form onSubmit={submitHandler}>
                             <div>
                                 <br/>
                                 {opNames.map((item) => (
                                     <InnerBox key={item.id}>
                                         <input
                                            onChange={() => changeHandler(item.id)}
                                            type="checkbox"
                                            id={item.id}
                                            checked={item.checked}
                                         /></InnerBox>))}
                                         </div>
                                         <Asdass>
                                 {opNames.map((item) => (
                                     <InnerNameBox key={item.id}><label htmlFor={item.id}>{item.name}</label></InnerNameBox>))}
                                     </Asdass>
                                 <br />
                             </Form>
                         </Checkbox>
                         <DelOpButtons><Button variant="primary" onClick={submitHandler}>Удалить</Button> <br /><br />
                    <Button variant="danger" onClick={() => setShowModal(!showModal)}>Закрыть</Button></DelOpButtons>
            </Modal>
        </div>
    )
}