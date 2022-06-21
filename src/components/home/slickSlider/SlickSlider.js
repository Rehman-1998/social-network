import React, { useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
// import data from "../../../utilis/data";
import "./slider.css";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { listLocation } from "../../../redux/actions/locationAction";

const SlickSlider = () => {
  const dispatch = useDispatch();
  const getLoctions = useSelector((state) => state.locationList);
  const { locations, loading, error } = getLoctions;

  useEffect(() => {
    dispatch(listLocation());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container fluid className="py-1" style={{ backgroundColor: "#8FBF00" }}>
        <Container>
          <div className="py-1">
            <h3 className="text-white">Inspiration for your next trip</h3>
          </div>
          <div>
            <Row>
              {loading ? (
                <div className="text-center">
                  <CircularProgress style={{ color: "#CC2D4A" }} />
                </div>
              ) : error ? (
                <h3>{error}</h3>
              ) : (
                <Slider {...settings}>
                  {locations?.data?.map((item, index) => {
                    return (
                      <div key={index} className="slider-div card-main">
                        <Row>
                          <Col md={3} className="pb-3 pb-md-0 w-100">
                            <Card key={index}>
                              <Link to={`/service/${item.location}`}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body
                                  style={{
                                    backgroundColor:
                                      index % 2 === 0 ? "#CC2D4A" : "#BC1A6E",
                                  }}
                                >
                                  <Card.Title>
                                    {item.location.toUpperCase()}
                                  </Card.Title>
                                  <Card.Subtitle>
                                    {item.agencyCount} Agency Available
                                  </Card.Subtitle>
                                  <Card.Text></Card.Text>
                                </Card.Body>
                              </Link>
                            </Card>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </Slider>
              )}
            </Row>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default SlickSlider;
