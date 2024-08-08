import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import deviceicon1 from "../assets/img/deviceicon1.svg"
import deviceicon2 from "../assets/img/deviceicon2.svg"
import deviceicon3 from "../assets/img/deviceicon3.svg"
export default function Download() {
    const deviceItems = [
        {
            url:"/",
            icon: deviceicon1,
            device: "IOS",
        },
        {
            url:"/",
            icon: deviceicon2,
            device: "Android",
        },
        {
            url:"/",
            icon: deviceicon3,
            device: "Windows",
        },
    ]
  return (
    <div className='download'>
        <Container>
            <Row>
                <Col>
                    <div className="download-content">
                        <h3>Avalaible for Download</h3>
                        <div className="device-item">
                            {deviceItems.map((item, index)=>(
                                <Link to={item.url} key={index}><img src={item.icon} alt="" /><span>{item.device}</span></Link>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
