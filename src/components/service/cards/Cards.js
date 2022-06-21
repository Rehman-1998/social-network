import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./cards.css";
import { capitalizeFirstLetter } from "../../../utilis/capitalizeFirstLetter";

const Cards = ({ setDumyData, dumyData }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/profile", { state: { id } });
  };
  return (
    <>
      <Container className=" border-top pt-4 pb-4">
        <Row>
          {/* Map data */}
          {dumyData &&
            dumyData?.map((item, index) => (
              <Col key={index} className="mb-3" md={4} lg={3}>
                <div className="profile-cards">
                  <div className="cards-image">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="py-2">
                    <h5>{capitalizeFirstLetter(item.name)}</h5>
                  </div>
                  <div className="profile-status">
                    <p>Material Status :</p>
                    <p>{capitalizeFirstLetter(item.matirialStatus)}</p>
                  </div>
                  <div className="profile-status">
                    <p>Gender :</p>
                    <p>{capitalizeFirstLetter(item.gender)}</p>
                  </div>
                  <div className="profile-status">
                    <p>Age :</p>
                    <p>{item.age}</p>
                  </div>
                  <div className="profile-status">
                    <p>Zip Code :</p>
                    <p>{item.zipCode}</p>
                  </div>
                  <div>
                    <button onClick={() => handleClick(item._id)}>
                      See more{" "}
                    </button>
                  </div>
                </div>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
