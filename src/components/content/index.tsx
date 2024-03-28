import './style.css';
import Table from 'react-bootstrap/Table';
import { ButtonGroup, Form, Placeholder } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalAddForm from '../add-form';
function ContentPage() {
    const data = [{
        name:"qweqwe"
    },{
        name:"kiwkiw"
    }]
  return (
    
    <div className='content bg-light border position-relative'>
        <div className='contentTitle'>
            <h3>Today's Feed</h3>
            <hr />
        </div>        
        <div className='contentBody '>
            {data.map((item)=>(<Card>
                <Card.Header>
                    <Placeholder as="p" animation="glow">
                        <Placeholder xs={3} />
                    </Placeholder>
                </Card.Header>
                <Card.Body>
                    <Card.Title>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                    </Card.Title>
                    <Card.Text>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as="p" animation="glow">
                            <Placeholder xs={3} />
                        </Placeholder>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                    <Placeholder.Button className="button-card" variant="primary" xs={1}/>
                    <Placeholder.Button className="button-card" variant="danger" xs={1}/>
                    <Placeholder.Button className="button-card" variant="warning" xs={1}/>
                </Card.Footer>
            </Card>))}
        </div>
            <ModalAddForm/>
        
    </div>
  );
}

export default ContentPage;