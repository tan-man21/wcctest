import '../App.css';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

    return (
        <Navbar className="primary" sticky='top'>
            <Container fluid>
                    <Nav className='justify-content-center flex-grow-1' style={{paddingLeft: '180px'}}>
                        <Nav.Link>
                            <img src='/open-book.png' style={{width: '40px'}} />
                        </Nav.Link>
                    </Nav>
                    <Nav className='justify-content-end'>
                        <Nav.Link href='/testimonies' style={{ color: 'white' }}>Testimonies</Nav.Link>
                        <Nav.Link href='/upload' style={{ color: 'white' }}>Upload</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar