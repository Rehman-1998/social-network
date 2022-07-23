/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./profileCards.css";
import { Link, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";
import { Widget, addResponseMessage, toggleWidget } from "react-chat-widget";
import Logo from "../../assets/images/logo.png";
import "react-chat-widget/lib/styles.css";
// import data from "../../utilis/data";
const ProfileCards = () => {
  const [profileData, setProfileData] = React.useState("");
  const [loading, setLoading] = React.useState("");
  // const [test, setTest] = React.useState(false);
  const location = useLocation();
  useEffect(() => {
    fetch(`https://social-golf-network.herokuapp.com/user/${location.state.id}`)
      .then((response) => response.json())
      .then((res) => {
        const { data, success } = res;
        setLoading(success);
        setProfileData(data);
      });
  }, []);

  return (
    <>
      <Container className="py-5 border-top ipad-class">
        {!loading ? (
          <div className="text-center">
            <CircularProgress style={{ color: "#8FBF00" }} />
          </div>
        ) : (
          <>
            {addResponseMessage(
              `Hi, I am  ${
                profileData && capitalizeFirstLetter(profileData.name)
              } 
     Are you available to play golf?
      Date: 07/14/2022
      Time: ${profileData && capitalizeFirstLetter(profileData.availability)} 
      Where:${
        profileData && capitalizeFirstLetter(profileData.favouriteCourse)
      } 
       City: ${profileData && capitalizeFirstLetter(profileData.city)} 
        State: ${profileData && capitalizeFirstLetter(profileData.state)} 
         Zip: ${profileData && profileData.zipCode} 
          Purpose: ${profileData && profileData.purpose} `
            )}
            <Widget
              title={`Social Golf Network`}
              subtitle={""}
              profileAvatar={profileData?.image}
            />
            <Row>
              <Col className="mb-3" md={4}>
                <div className="profile-details">
                  <img src={profileData?.image} alt="" />
                  {/* <h3>
                  {profileData && capitalizeFirstLetter(profileData.name)}
                </h3> */}
                  <p className="text-justify mt-3">
                    "{profileData && profileData.about}"
                  </p>
                  <div className="text-center contact-button ">
                    <button onClick={() => toggleWidget()}>Contact Me </button>
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className="profile-desc">
                  {/* <h4>About Me</h4> */}
                  <h4 style={{ color: "#779e03" }}>
                    {profileData && capitalizeFirstLetter(profileData.name)}
                  </h4>
                  <Row>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Gender :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.gender)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Age :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>{profileData?.age}</p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Material Status :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.matirialStatus)}
                        </p>
                      </div>
                    </Col>
                    {/* <Col md={3} xs={6} sm={6}>
                    <div>
                      <h6>Country :</h6>
                    </div>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <p>
                        {profileData &&
                          capitalizeFirstLetter(profileData.country)}
                      </p>
                    </div>
                  </Col> */}
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>State :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.state)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>City :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.city)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Zip Code</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>{profileData?.zipCode}</p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Drinker :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.drinker)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Smoke :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.smoker)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Race :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.race)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Religion :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.religion)}
                        </p>
                      </div>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Political View :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.politicalView)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Skill Level :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.skillLevel)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Current Handicap :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>{profileData?.currentHandicap}</p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Often Play :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.oftenPlay)}
                        </p>
                      </div>
                    </Col>

                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Availability :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.availability)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Willingness to Drive :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>{profileData?.distance} miles</p>
                      </div>
                    </Col>
                    <Col
                      className="border-bottom pb-2 mb-2"
                      md={3}
                      xs={6}
                      sm={6}
                    >
                      <div>
                        <h6>Purpose for playing :</h6>
                      </div>
                    </Col>
                    <Col
                      className="border-bottom pb-2 mb-2"
                      md={9}
                      xs={6}
                      sm={6}
                    >
                      {/* <div>
                      <p>
                        {profileData &&
                          capitalizeFirstLetter(profileData.purpose)}
                      </p>
                    </div> */}
                      <div>
                        {profileData?.purpose.split(",").map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Favorite Courses :</h6>
                      </div>
                    </Col>
                    <Col md={9} xs={6} sm={6}>
                      {/* <div>
                      <p>{profileData?.favouriteCourse}</p>
                    </div> */}
                      <div>
                        {profileData?.favouriteCourse
                          .split(",")
                          .map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                      </div>
                    </Col>
                  </Row>
                  <h4>Professional</h4>
                  <Row>
                    <Col className="" md={3} xs={6} sm={6}>
                      <div>
                        <h6>LinkdIn Profile :</h6>
                      </div>
                    </Col>
                    <Col className="" md={9} xs={6} sm={6}>
                      <div>
                        <p
                          style={{
                            color: "blue",
                            cursor: "pointer",
                            wordBreak: "break-all",
                          }}
                          onClick={() =>
                            window.location.replace(profileData?.linkdinProfile)
                          }
                        >
                          {profileData && profileData.linkdinProfile}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Company Name :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.companyName)}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Title :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(
                              profileData.positionInCompany
                            )}
                        </p>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <h6>Industry :</h6>
                      </div>
                    </Col>
                    <Col md={3} xs={6} sm={6}>
                      <div>
                        <p>
                          {profileData &&
                            capitalizeFirstLetter(profileData.industry)}
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ProfileCards;
