import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mokupImg from "../assets/img/mokupImg.png"
export default function Howto() {
  return (
    <div className='howto'>
      <Container>
        <Row>
            <Col>
                <div className="howto-content">
                    <h2>How to play</h2>
                    <p>Sed ut perspiciatis unde omnis iste natus erroaccusantium doloremque laudantium.</p>
                    <Link to="/" className="boxed-btn white-bg">Find out more</Link>
                    <img className='mokupImg' src={mokupImg} alt="" />
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
