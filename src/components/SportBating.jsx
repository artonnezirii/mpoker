import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function SportBating() {
  return (
    <div className='bating'>
        <Container>
            <Row>
                <Col>
                    <div className="bating-content">
                        <h2>SportBetting</h2>
                        <h3>First deposit Bonus</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus erro accusantium doloremque laudantium.</p>
                        <Link to="https://play.mpoker.com" className="boxed-btn white-bg">Get Bonus</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
