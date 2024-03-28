import './style.css';
import { ButtonGroup, Form, Modal} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
function ModalAddForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    
    <>
        <Button className='addBtn' onClick={handleShow}>
        +
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Form>
            <Modal.Header closeButton>
                <Modal.Title>Post Heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control className='input-add-form' as="textarea" rows={3} placeholder='Input Form' />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                </ButtonGroup>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Form>
            
            
            
        </Modal> 
    </>
  );
}

export default ModalAddForm;