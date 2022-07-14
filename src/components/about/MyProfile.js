/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../profile/profileCards.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { MenuItem, FormControl, TextField, Autocomplete } from "@mui/material";
import DatePicker from "react-multi-date-picker";
import data from "../../utilis/data";
import city from "../../utilis/city";
import county from "../../utilis/county";
import americaCity from "../../utilis/americaCity";
import "./myprofile.css";
const MyProfile = () => {
  const [profileData, setProfileData] = React.useState("");
  const [loading, setLoading] = React.useState("");
  const location = useLocation();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(
      `https://social-golf-network.herokuapp.com/user/62bff400d45f9d4184350c89`
    )
      .then((response) => response.json())
      .then((res) => {
        const { data, success } = res;
        setLoading(success);
        setProfileData(data);
      });
    addResponseMessage(
      "Hey ! Do you tell me which time and day you want to play with me ?"
    );
  }, []);

  const [arr, setArr] = React.useState({
    age: "",
    birthdate: "",
    gender: "",
    country: "",
    city: "",
    zipCode: "",
    distance: "",
    matirialStatus: "",
    drinker: "",
    smoker: [],
    race: "",
    religion: "",
    politicalView: "",
    skillLevel: [],
    currentHandicap: [],
    oftenPlay: "",
    purpose: [],
    professional: "",
    companyName: "",
    positionInCompany: "",
    industry: "",
    availability: [],
    about: "" || profileData.about,
    time: [],
    date: [],
    playTime: [],
    playDay: [],
    favouriteCourse: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArr((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  var currentYear = new Date().getFullYear();

  return (
    <>
      <Container className="py-5 border-top ">
        <Widget
          title={`SOCIAL GOLF NETWORK`}
          subtitle={""}
          toggleWidget={true}
          profileAvatar={profileData?.image}
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
                <textarea
                  className="about-text"
                  type="text"
                  value={arr.about}
                  defaultValue={profileData && profileData.about}
                  name="about"
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col md={8}>
              <div className="profile-desc">
                <h4>About Me</h4>
                <Row>
                  <Col md={3} xs={6} sm={6} className="mb-3">
                    <DatePicker
                      onYearChange={(e) =>
                        setArr({ ...arr, age: currentYear - e.year })
                      }
                      multiple={false}
                      onChange={(e) =>
                        setArr({
                          ...arr,
                          age: currentYear - e.format().split("/")[0],
                        })
                      }
                      placeholder={"Birthdate"}
                    />
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.age}
                        name={"age"}
                        onChange={handleChange}
                        label="Age"
                      ></TextField>
                    </FormControl>
                  </Col>
                  <Col md={3} xs={6} sm={6} className="mb-3">
                    <FormControl fullWidth>
                      <Autocomplete
                        id="controllable-states-demo"
                        options={americaCity.data}
                        getOptionLabel={(option) => option?.name || arr.country}
                        name={"country"}
                        value={arr?.country}
                        onChange={(e, value) =>
                          setArr({ ...arr, country: value.name })
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth label="State" />
                        )}
                      />
                    </FormControl>
                  </Col>
                  <Col md={3} xs={6} sm={6} className="mb-3">
                    <FormControl fullWidth>
                      <Autocomplete
                        id="controllable-states-demo"
                        options={city.data}
                        getOptionLabel={(option) => option?.city || arr.city}
                        name={"city"}
                        value={arr?.city}
                        onChange={(e, value) =>
                          setArr({ ...arr, city: value.city })
                        }
                        renderInput={(params) => (
                          <TextField {...params} fullWidth label="City" />
                        )}
                      />
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.matirialStatus}
                        name={"matirialStatus"}
                        onChange={handleChange}
                        select
                        label="Marital Status"
                      >
                        {data?.materialStatus?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.drinker}
                        name={"drinker"}
                        onChange={handleChange}
                        select
                        label="Drinker"
                      >
                        {data?.drinker?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.smoker}
                        name={"smoker"}
                        onChange={handleChange}
                        select
                        label="Smoker"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.smoker?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.race}
                        name={"race"}
                        onChange={handleChange}
                        select
                        label="Race"
                      >
                        {data?.race?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.religion}
                        name={"religion"}
                        onChange={handleChange}
                        select
                        label="Religion"
                      >
                        {data?.religion?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.politicalView}
                        name={"politicalView"}
                        onChange={handleChange}
                        select
                        label="Political View"
                      >
                        {data?.politicalView?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.favouriteCourse}
                        name={"favouriteCourse"}
                        onChange={handleChange}
                        select
                        label="Home Courses"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.favouriteCourse?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {item.value}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.skillLevel}
                        name={"skillLevel"}
                        onChange={handleChange}
                        select
                        label="Skill Level"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.skillLevel?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.currentHandicap}
                        name={"currentHandicap"}
                        onChange={handleChange}
                        select
                        label="Current Handicap"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.currentHandicap?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.name)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.oftenPlay}
                        name={"oftenPlay"}
                        onChange={handleChange}
                        select
                        label="Often Play"
                      >
                        {data?.oftenPlay?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.availability}
                        name={"availability"}
                        onChange={handleChange}
                        select
                        label="Availability"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.myAvailability?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.time}
                        name={"time"}
                        onChange={handleChange}
                        select
                        label="Time"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.time?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.distance}
                        name={"distance"}
                        onChange={handleChange}
                        select
                        label="Willingness to Drive"
                      >
                        {data?.distance?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)} miles
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                  <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.purpose}
                        name={"purpose"}
                        onChange={handleChange}
                        select
                        label="Purpose"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.purpose?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
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
                  <Col className="mb-3" md={4} xs={6} sm={6}>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="Company Name"
                        variant="outlined"
                        name="companyName"
                        value={arr.companyName}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col className="mb-3" md={4} xs={6} sm={6}>
                    <div>
                      <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        name="positionInCompany"
                        value={arr.positionInCompany}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col className="mb-3" md={6} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.industry}
                        name={"industry"}
                        onChange={handleChange}
                        select
                        label="Industry"
                      >
                        {data?.industry?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                </Row>
                <h4>When do I want to play?</h4>
                <Row>
                  <Col md={6} xs={6} sm={6} className="mb-3">
                    <DatePicker
                      onChange={(e, value) =>
                        console.log("e Value===>>>", e, value)
                      }
                      placeholder={"Day"}
                      multiple={true}
                    />
                  </Col>
                  <Col className="mb-3" md={6} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        required
                        value={arr.playTime}
                        name={"playTime"}
                        onChange={handleChange}
                        select
                        label="Time"
                        SelectProps={{
                          multiple: true,
                        }}
                      >
                        <MenuItem disabled>Select Multiple</MenuItem>
                        {data?.time?.map((item, index) => (
                          <MenuItem key={index} value={item.value}>
                            {capitalizeFirstLetter(item.value)}
                          </MenuItem>
                        ))}
                      </TextField>
                    </FormControl>
                  </Col>
                </Row>
                <div className="save-button">
                  <button
                    onClick={() => {
                      const id = "62bff400d45f9d4184350c89";
                      navigate("/profile", { state: { id } });
                    }}
                  >
                    Save
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default MyProfile;
