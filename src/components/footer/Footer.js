import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import data from "../../utilis/data";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <Container className="bg-light pt-3 " fluid>
        <Container>
          {/* <h5>Explore the option around in Lahore</h5>
          <Row className="py-4">
            {data.cardData.map((item, index) => (
              <Col key={index} md={3} xs={6} sm={6}>
                <p>{item.title}</p>
              </Col>
            ))}
          </Row> */}
          <Row className="pt-2 footer-icon  border-top">
            <Col md={6}>
              <p>&copy; 2022 Social Golf Network , All Rights Reserved.</p>
            </Col>
            <Col md={6}>
              <div className="text-md-end text-center ">
                <i className="fa-brands fa-facebook-f me-4"></i>
                <i className="fa-brands fa-instagram me-4"></i>
                <i className="fa-brands fa-twitter me-4"></i>
                <i className="fa-brands fa-linkedin-in"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
