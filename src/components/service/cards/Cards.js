/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, useLocation } from "react-router-dom";
import "./cards.css";
import { capitalizeFirstLetter } from "../../../utilis/capitalizeFirstLetter";

const Cards = ({ setDumyData, dumyData }) => {
  const navigate = useNavigate();
  let location = useLocation();
  const [data, setData] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleClick = (id) => {
    navigate("/profile", { state: { id } });
  };

  const fetchData = () => {
    fetch("https://social-golf-network.herokuapp.com/user/filter", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(location.state),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
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
        {data?.length === 0 ? (
          <div className="text-center">
            <h3>No Result Match</h3>
          </div>
        ) : (
          <h5 className="mb-5">Results are :</h5>
        )}
        <Row>
          {/* Map data */}
          {/* {dumyData &&
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
            ))} */}
          {loading ? (
            <>
              {data &&
                data?.map((item, index) => (
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
