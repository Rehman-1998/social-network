import React from "react";
import { Container } from "react-bootstrap";
import banner from "../../../assets/images/pic3.jpg";
import "./banner.css";
// import { Link } from "react-router-dom";
import Logo from "../../../assets/images/Main_Logo.png";

const Banner = () => {
  return (
    <>
      <Container fluid className=" g-0">
        <div
          className="banner-image"
          style={{
            background: `url(${banner})`,
          }}
        >
          <div className="banner">
            <div className="banner-title">
              {/* <h1>Welcome to Social Golf Network</h1> */}
              <img className="banner-Logo" src={Logo} alt="" />
              {/* <h4>Find your Golf Patner </h4> */}
              {/* <Link to="/search">
                <button className="mt-5">Search</button>
              </Link> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner;
