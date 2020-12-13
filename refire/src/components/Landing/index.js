import bannerImage from './nameLogo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Landing = () => {
    return(
       <Row>
        <Col className="mt-4">
        <img className="nameImage" src={bannerImage} alt="Everett Diuguid"></img>
        </Col>
    </Row> 
    )
    
}

export default Landing;