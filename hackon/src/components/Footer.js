import { Col, Container, Row } from 'reactstrap';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer style={{ color: '#fff', backgroundColor: '#16005c' }}>
            <Container>
                <Row>
                    <Col xs={12} className="d-flex justify-content-center align-items-center mt-2">
                        <p><AiFillGithub color="white" /> Made by Team Name</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;