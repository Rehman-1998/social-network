/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import "./cards.css";
import { capitalizeFirstLetter } from "../../../utilis/capitalizeFirstLetter";

const Cards = ({ setDumyData, dumyData }) => {
  const navigate = useNavigate();
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleClick = (id) => {
    navigate("/profile", { state: { id } });
  };

  const fetchData = () => {
    fetch("https://social-golf-network.herokuapp.com/user")
      .then((response) => response.json())
      .then((res) => {
        setData(res.data);
        setLoading(res.success);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container className=" border-top pt-4 pb-4">
        <h5 className="mb-3">Contact All :</h5>
        <Row>
          {loading ? (
            <>
              {data &&
                data?.map((item, index) => (
                  <Col key={index} className="mb-3" md={6} lg={4}>
                    <div className="profile-cards">
                      <Row>
                        <Col className="mb-2" sm={4} xs={4} md={4} lg={4}>
                          <div className="cards-image">
                            <img
                              style={{ cursor: "pointer" }}
                              onClick={() => handleClick(item._id)}
                              src={item.image}
                              alt=""
                            />
                          </div>
                        </Col>
                        <Col className="mb-2" sm={8} xs={8} md={8} lg={8}>
                          <Row>
                            <Col md={12}>
                              <div>
                                <h5
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleClick(item._id)}
                                >
                                  {capitalizeFirstLetter(item.name)}
                                </h5>
                              </div>
                            </Col>
                            <Col md={5} xs={5} sm={5}>
                              <div className="profile-title">
                                <p>Status :</p>
                              </div>
                            </Col>
                            <Col md={7} xs={7} sm={7}>
                              <div className="profile-subtitle">
                                <p>
                                  {capitalizeFirstLetter(item.matirialStatus)}
                                </p>
                              </div>
                            </Col>
                            <Col md={5} xs={5} sm={7}>
                              <div className="profile-title">
                                <p>Gender:</p>
                              </div>
                            </Col>
                            <Col md={7} xs={5} sm={7}>
                              <div className="profile-subtitle">
                                <p>{capitalizeFirstLetter(item.gender)}</p>
                              </div>
                            </Col>
                            <Col md={5} xs={5} sm={5}>
                              <div className="profile-title">
                                <p>Skill Level :</p>
                              </div>
                            </Col>
                            <Col md={7} xs={7} sm={7}>
                              <div className="profile-subtitle">
                                <p>{capitalizeFirstLetter(item.skillLevel)}</p>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={2} xs={2} sm={2}>
                          <div className="profile-title">
                            <p>Age:</p>
                          </div>
                        </Col>
                        <Col md={2} xs={2} sm={2}>
                          <div className="profile-subtitle">
                            <p>{item.age}</p>
                          </div>
                        </Col>
                        <Col md={5} xs={5} sm={5}>
                          <div className="profile-title">
                            <p>Current Handicap:</p>
                          </div>
                        </Col>
                        <Col md={3} xs={3} sm={3}>
                          <div className="profile-subtitle">
                            <p>{item.currentHandicap}</p>
                          </div>
                        </Col>
                        <Col md={2} xs={2} sm={2}>
                          <div className="profile-title">
                            <p>State:</p>
                          </div>
                        </Col>
                        <Col md={2} xs={2} sm={2}>
                          <div className="profile-subtitle">
                            <p>{capitalizeFirstLetter(item.state)}</p>
                          </div>
                        </Col>
                        <Col md={5} xs={5} sm={5}>
                          <div className="profile-title">
                            <p>Zip Code : </p>
                          </div>
                        </Col>
                        <Col md={3} xs={3} sm={3}>
                          <div className="profile-subtitle">
                            <p>{item.zipCode}</p>
                          </div>
                        </Col>
                        <Col md={2} xs={2} sm={2}>
                          <div className="profile-title">
                            <p>City:</p>
                          </div>
                        </Col>
                        <Col md={2} xs={2} sm={2}>
                          <div className="profile-subtitle">
                            <p>{capitalizeFirstLetter(item.city)}</p>
                          </div>
                        </Col>
                        {/* <Col md={5} xs={5} sm={5}>
                          <div className="profile-title">
                            <p>Religion : </p>
                          </div>
                        </Col>
                        <Col md={3} xs={3} sm={3}>
                          <div className="profile-subtitle">
                            <p>{capitalizeFirstLetter(item.religion)}</p>
                          </div>
                        </Col> */}

                        <div className="purpose-border"></div>
                        <Row>
                          <Col md={12} xs={4} sm={4}>
                            <div className="profile-title ">
                              <p>Favorite Courses :</p>
                            </div>
                          </Col>
                          <Col md={12} xs={8} sm={8}>
                            <div className="profile-subtitle ">
                              {/* <p style={{ textAlign: "left" }}>
                                {capitalizeFirstLetter(item.purpose)}
                              </p> */}
                              {item.favouriteCourse
                                .split(",")
                                .map((item, index) => (
                                  <li key={index}>{item}</li>
                                ))}
                              {/* <p style={{ textAlign: "left" }}>
                                {capitalizeFirstLetter(item.favouriteCourse)}
                              </p> */}
                            </div>
                          </Col>
                        </Row>
                      </Row>
                      <div className="text-center mt-2">
                        <button onClick={() => handleClick(item._id)}>
                          Full Bio{" "}
                        </button>
                      </div>
                    </div>
                  </Col>
                ))}
            </>
          ) : (
            <div className="text-center">
              <CircularProgress style={{ color: "#8FBF00" }} />
            </div>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Cards;
