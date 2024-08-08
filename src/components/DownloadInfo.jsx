import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

export default function DownloadInfo() {
    const serviceitem = [
        {
            title: "Avalaible for Download",
            desc: "Welcome to PokerStars, where you’ll find the best tournaments and games, secure deposits, fast withdrawals ad award-winning software. This is where champions are born, and you could be next. You’ll also find rules and hand ranking for Texas Holder. Omaha and other poker games. Practice your skills with Play Money or join real money tames. There’s no better place to learn and play poker.",
        },
        {
            title: "The best poker tournaments",
            desc: "PokerStars is home to the best online poker events. Every year we run the best online tournament series in the world. We also host the best weekly tournaments, plus many more every day of the week. With a game starting every second, PokerStars is the only place to play tournament poker online.",
        },
        {
            title: "Team PokerStars Pro",
            desc: "PokerStars is the only place where you can watch and play against Team PokerStars pro - our group of the elite pro players. Between them they have sources ot world Series bracelets, EPT and WPT titles and more, adding up to millions in winning, and now you can join them at the tables with PokerStars.",
        },
    ]
  return (
    <div className='downloadinfo'>
      <Container>
        <Row>
            <Col>
                <div className="downloadinfo-content">
                    <Row>
                        {serviceitem.map((item, index)=>(
                            <Col lg={4} md={6} key={index} className='mb-3 mb-lg-0'>
                                <div className="service-item">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
