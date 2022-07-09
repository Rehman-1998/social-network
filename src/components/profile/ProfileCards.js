/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./profileCards.css";
import { Link, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";
import { Widget, addResponseMessage } from "react-chat-widget";
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
    addResponseMessage(
      "Do You Want to Play golf on the afternoon of August 5th at Chestatee Golf Club ?"
    );
  }, []);
  // console.log("TES", test);

  return (
    <>
      <Container className="py-5 border-top ipad-class">
        <Widget
          // className={test ? "rcw-chat-container" : ""}
          title={`Social Golf Network`}
          subtitle={""}
          profileAvatar={profileData?.image}
          // toggleWidget={(h) => console.log("j", h)}
          // launcher={(handleToggle) => console.log("handle", handleToggle)}
        />
        {!loading ? (
          <div className="text-center">
            <CircularProgress style={{ color: "#8FBF00" }} />
          </div>
        ) : (
          <Row>
            <Col className="mb-3" md={4}>
              <div className="profile-details">
                <img src={profileData?.image} alt="" />
                <h3>
                  {profileData && capitalizeFirstLetter(profileData.name)}
                </h3>
                <p className="text-justify">
                  " {profileData && profileData.about} "
                </p>
                {/* <div className="text-center contact-button ">
                  <button onClick={() => setTest(true)}>Contact Me </button>
                </div> */}
              </div>
            </Col>
            <Col md={8}>
              <div className="profile-desc">
                <h4>About Me</h4>
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
                  <Col md={3} xs={6} sm={6}>
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
                  </Col>
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
                        {profileData && capitalizeFirstLetter(profileData.city)}
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
                        {profileData && capitalizeFirstLetter(profileData.race)}
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
                      <h6>Distance to Drive :</h6>
                    </div>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <p>{profileData?.distance}</p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <h6>Purpose to Play :</h6>
                    </div>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <p>
                        {profileData &&
                          capitalizeFirstLetter(profileData.purpose)}
                      </p>
                    </div>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <h6>Favourite Course :</h6>
                    </div>
                  </Col>
                  <Col md={9} xs={6} sm={6}>
                    <div>
                      <p>{profileData?.favouriteCourse}</p>
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
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <h6>Title :</h6>
                    </div>
                  </Col>
                  <Col md={3} xs={6} sm={6}>
                    <div>
                      <p>
                        {profileData &&
                          capitalizeFirstLetter(profileData.positionInCompany)}
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default ProfileCards;
