import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import data from "../../utilis/data";
import "./cards.css";

const Cards = () => {
  return (
    <>
      <Container fluid className="py-2" style={{ backgroundColor: "black" }}>
        <Container>
          <div className="py-2">
            <h3 className="text-white">Inspiration for your next trip</h3>
          </div>
          <div>
            <Row>
              {data.cardData.map((item, index) => (
                <Col key={index} md={3} className="pb-3 pb-md-0">
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body
                      className="change-color"
                      // style={{
                      //   backgroundColor: `${item.color}`,
                      // }}
                    >
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Subtitle>{item.km}</Card.Subtitle>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Cards;
