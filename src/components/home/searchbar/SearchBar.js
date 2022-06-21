import React from "react";
import "./searchbar.css";
import { Container, Row, Col } from "react-bootstrap";
import data from "../../../utilis/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Autocomplete from "react-google-autocomplete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const SearchBar = () => {
  const [startDate, setStartDate] = React.useState(new Date());
  const [days, setDays] = React.useState("");

  return (
    <>
      <Container fluid className="py-3">
        <Container>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div className="searchbar-main">
                <Row>
                  <Col className="g-0 main-col" lg={4} md={3} xs={6} sm={6}>
                    <div className="sub-searchbar ps-3">
                      <p>Pickup Location</p>
                      {/* <input type="text" placeholder="Where you want to go" /> */}
                      <Autocomplete
                        apiKey={process.env.REACT_APP__API_KEY}
                        onPlaceSelected={(place) => {
                          console.log(place);
                        }}
                        options={{
                          types: ["geocode", "establishment"],
                        }}
                      />
                    </div>
                  </Col>
                  <Col className="g-0 main-col" lg={3} md={3} xs={6} sm={6}>
                    <div className="sub-searchbar">
                      <p>Pickup Date</p>
                      {/* <input type="date" placeholder="Add Dates" /> */}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </Col>
                  <Col className="g-0 main-col" lg={3} md={3} xs={6} sm={6}>
                    <div className="sub-searchbar ps-md-0 ps-3">
                      <p>Booking Days</p>
                      {/* <select name="" id="">
                        <option disabled selected>
                          Select days
                        </option>
                        {data.options.map((item, index) => {
                          return (
                            <>
                              <option value={index}>{item.value}</option>
                            </>
                          );
                        })}
                      </select> */}
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
                    </div>
                  </Col>
                  <Col className="g-0 " lg={2} md={3} xs={6} sm={6}>
                    <div className="search-button">
                      <i className="fa fa-search pe-2"></i>
                      <span>Search</span>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default SearchBar;
