import React from "react";
import "./serviceHeader.css";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import car from "../../../assets/images/check2.png";
import DatePicker from "react-datepicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Autocomplete from "react-google-autocomplete";
import data from "../../../utilis/data";

const ServiceHeader = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [days, setDays] = React.useState("");
  return (
    <>
      <Navbar className="service-navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img className="logo" src={car} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* For All devices Expect Mobile */}
            <Nav className="ms-auto d-lg-block d-none">
              <div className="service-searchbar-main">
                <Row>
                  <Col className="g-0 main-col" lg={4} md={3} xs={6} sm={6}>
                    <div className="service-sub-searchbar ps-3">
                      <p>Location</p>
                      {/* <input type="text" placeholder="Where you want to go" /> */}
                      <Autocomplete
                        apiKey={process.env.GOOGLE_API_KEY}
                        onPlaceSelected={(place) => {
                          console.log(
                            "selected Place",
                            place.SearchBoxOptions,
                            place.formatted_address.split(",")[1],
                            place.geometry.location.lat(),
                            place.geometry.location.lng()
                          );
                        }}
                      />
                      {/* <LocationSearchInput /> */}
                    </div>
                  </Col>
                  <Col className="g-0 main-col" lg={3} md={3} xs={6} sm={6}>
                    <div className="service-sub-searchbar">
                      <p>Date</p>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </Col>
                  <Col className="g-0 main-col" lg={3} md={3} xs={6} sm={6}>
                    <div className="service-sub-searchbar ps-md-0 ps-3">
                      <p>Days</p>

                      <FormControl
                        id=""
                        className=" select-days"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <Select
                          value={days}
                          onChange={(e) => {
                            setDays(e.target.value);
                            console.log("hey", e.target.value);
                          }}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                        >
                          <MenuItem value={""}>
                            <em>Select Days</em>
                          </MenuItem>
                          {data.options.map((item, index) => (
                            <MenuItem key={index} value={item.value}>
                              {item.value}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      {/* <select name="" id="">
                        <option disabled selected>
                          Select days
                        </option>
                        {data.options.map((item, index) => {
                          return (
                            <option key={index} value={index}>
                              {item.value}
                            </option>
                          );
                        })}
                      </select> */}
                    </div>
                  </Col>
                  <Col className="g-0 " lg={2} md={3} xs={6} sm={6}>
                    <div className="service-search-button">
                      {/* <i className="fa fa-search pe-2"></i> */}
                      <span>Search</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Nav>
            {/* For Mobile  */}
            <Nav className="mx-auto d-lg-none d-block">
              <Nav.Link className="nav-menu" href="/">
                Places to Stay
              </Nav.Link>
              <Nav.Link className="nav-menu" href="/experince">
                Experiences
              </Nav.Link>
              <Nav.Link className="nav-menu" href="/a">
                Online Experiences
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto align-items-baseline">
              <Nav.Link className="nav-menu" href="/b">
                Become a Host
              </Nav.Link>
              <i className="fa-solid fa-globe text-black ps-2"></i>
              <NavDropdown
                title={
                  <div className="service-login-icon">
                    <i className="fa-solid fa-bars text-black me-3"></i>
                    <i className="fa-solid fa-user user-icon"></i>
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="/b">Sign Up</NavDropdown.Item>
                <NavDropdown.Item href="/a">Login In</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/b">Host your home</NavDropdown.Item>
                <NavDropdown.Item href="/b">
                  Host an Experience
                </NavDropdown.Item>
                <NavDropdown.Item href="/b">Help</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ServiceHeader;
