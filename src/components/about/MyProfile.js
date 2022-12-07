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
import {
  MenuItem,
  FormControl,
  TextField,
  Autocomplete,
  InputLabel,
  OutlinedInput,
  ListItemText,
  Checkbox,
  Select,
} from "@mui/material";
import DatePicker from "react-multi-date-picker";
import data from "../../utilis/data";
import city from "../../utilis/city";
import county from "../../utilis/county";
import americaCity from "../../utilis/americaCity";
import zip from "../../utilis/zip.json";
import Pic from "../../assets/images/mypic.jpeg";
import "./myprofile.css";
const usZips = require("us-zips/array");
const MyProfile = () => {
  const [profileData, setProfileData] = React.useState("");
  const [loading, setLoading] = React.useState("");
  const [msg, setMsg] = React.useState(false);
  const [customLoader, setCustomLoader] = React.useState(false);
  const location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://social-golf-api.onrender.com/user/62bff400d45f9d4184350c89`)
      .then((response) => response.json())
      .then((res) => {
        const { data, success } = res;
        setLoading(success);
        setProfileData(data);
      });
  }, []);

  const [arr, setArr] = React.useState({
    user_id: "62bff400d45f9d4184350c89",
    about: "" || (profileData?.about && profileData?.about),
    age: "",
    birthdate: "",
    gender: "",
    state: "",
    city: "",
    zipCode: "",
    distance: "",
    matirialStatus: "",
    drinker: "",
    smoker: [],
    race: "",
    religion: "",
    politicalView: "",
    skillLevel: "",
    currentHandicap: "",
    oftenPlay: "",
    companyName: "",
    positionInCompany: "",
    industry: "",
    availability: [],
    purpose: [],
    favouriteCourse: [],
    linkdinProfile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArr((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomLoader(true);
    console.log("form submit===>>", arr);
    // send Data API
    fetch("https://social-golf-api.onrender.com/user/update", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(arr),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          setMsg(true);
          setCustomLoader(false);
          // alert("change has been saved");
          setTimeout(() => {
            const id = "62bff400d45f9d4184350c89";
            navigate("/profile", { state: { id } });
          }, 2000);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setCustomLoader(false);
      });
  };

  // console.log("zippp===", zip);

  // console.log(
  //   "Sorting===>>",
  //   zip.sort(function (a, b) {
  //     return a.Zip - b.Zip;
  //   })
  // );

  // var currentYear = new Date().getFullYear();

  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const zipData = usZips.map((item, index) => {
    return { zip: item.zipCode };
  });

  return (
    <>
      <Container className="py-5 border-top ">
        {/* <Widget
          title={`SOCIAL GOLF NETWORK`}
          subtitle={""}
          toggleWidget={true}
          profileAvatar={profileData?.image}
        /> */}
        {!loading ? (
          <div className="text-center">
            <CircularProgress style={{ color: "#8FBF00" }} />
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <Row>
              <Col className="mb-3" md={4}>
                <div className="profile-details">
                  {/* <img src={profileData?.image} alt="" /> */}
                  <img src={Pic} alt="" />
                  <h3>
                    {profileData && capitalizeFirstLetter(profileData.name)}
                  </h3>
                  <textarea
                    className="about-text"
                    type="text"
                    value={arr?.about}
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
                        // onYearChange={(e) =>
                        //   setArr({ ...arr, age: currentYear - e.year })
                        // }
                        format={"MM/DD/YYYY"}
                        multiple={false}
                        onChange={(e) =>
                          setArr({
                            ...arr,
                            age: getAge(e.format()),
                          })
                        }
                        placeholder={"Birthdate"}
                      />
                    </Col>
                    <Col className="mb-3" md={3} xs={6} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          value={arr.age}
                          name={"age"}
                          required
                          onChange={handleChange}
                          label="Age"
                        ></TextField>
                      </FormControl>
                    </Col>
                    <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <Autocomplete
                          id="controllable-states-demo"
                          required
                          options={americaCity.data}
                          getOptionLabel={(option) => option?.name || arr.state}
                          name={"state"}
                          value={arr?.state}
                          onChange={(e, value) =>
                            setArr({ ...arr, state: value.name })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              required
                              fullWidth
                              label="State"
                            />
                          )}
                        />
                      </FormControl>
                    </Col>
                    <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <TextField
                          id="outlined-basic"
                          label="City"
                          variant="outlined"
                          name={"city"}
                          value={arr?.city}
                          onChange={(e) =>
                            setArr({ ...arr, city: e.target.value })
                          }
                        />
                      </FormControl>
                    </Col>
                    {/* <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <Autocomplete
                          id="controllable-states-demo"
                          required
                          options={city.data}
                          getOptionLabel={(option) => option?.city || arr.city}
                          name={"city"}
                          value={arr?.city}
                          onChange={(e, value) =>
                            setArr({ ...arr, city: value.city })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              required
                              fullWidth
                              label="City"
                            />
                          )}
                        />
                      </FormControl>
                    </Col> */}
                    <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <TextField
                          id="outlined-basic"
                          label="Zip Code"
                          variant="outlined"
                          name={"zipCode"}
                          value={arr?.zipCode}
                          onChange={(e) =>
                            setArr({ ...arr, zipCode: e.target.value })
                          }
                        />
                      </FormControl>
                    </Col>
                    {/* <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <Autocomplete
                          id="controllable-states-demo"
                          options={zipData}
                          getOptionLabel={(option) =>
                            option?.zip || arr.playZipCode
                          }
                          name={"playZipCode"}
                          value={arr?.playZipCode}
                          onChange={(e, value) =>
                            setArr({ ...arr, playZipCode: value.zip })
                          }
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              required
                              fullWidth
                              label="Zip Code"
                            />
                          )}
                        />
                      </FormControl>
                    </Col> */}
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
                    <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <InputLabel id="demo-multiple-checkbox-label">
                          Smoker
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          required
                          multiple
                          value={arr.smoker}
                          name={"smoker"}
                          onChange={handleChange}
                          input={<OutlinedInput label="Smoker" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {data?.smoker?.map((item, index) => (
                            <MenuItem key={index} value={item.value}>
                              <Checkbox
                                checked={arr.smoker.indexOf(item.value) > -1}
                              />
                              <ListItemText primary={item.value} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col>
                    {/* <Col className="mb-3" md={3} xs={6} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          value={arr.smoker}
                          name={"smoker"}
                          onChange={handleChange}
                          select
                          label="Smoker"
                        >
                          {data?.smoker?.map((item, index) => (
                            <MenuItem key={index} value={item.value}>
                              {capitalizeFirstLetter(item.value)}
                            </MenuItem>
                          ))}
                        </TextField>
                      </FormControl>
                    </Col> */}
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
                    {/* <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        
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
                  </Col> */}

                    <Col className="mb-3" md={3} xs={6} sm={6}>
                      <FormControl fullWidth>
                        <TextField
                          required
                          value={arr.skillLevel}
                          name={"skillLevel"}
                          onChange={handleChange}
                          select
                          label="Skill Level"
                        >
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
                          value={arr.oftenPlay}
                          name={"oftenPlay"}
                          onChange={handleChange}
                          select
                          label="Frequency of Play"
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
                          value={arr.currentHandicap}
                          name={"currentHandicap"}
                          onChange={handleChange}
                          select
                          label="Current Handicap"
                        >
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

                    {/* <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        
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
                  </Col> */}
                    <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <InputLabel id="demo-multiple-checkbox-label">
                          Availability
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          required
                          multiple
                          value={arr.availability}
                          name={"availability"}
                          onChange={handleChange}
                          input={<OutlinedInput label="Availability" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {data?.availability?.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={capitalizeFirstLetter(item.value)}
                            >
                              <Checkbox
                                checked={
                                  arr.availability.indexOf(item.value) > -1
                                }
                              />
                              <ListItemText primary={item.value} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col>
                    {/* <Col md={3} xs={6} sm={6} className="mb-3">
                    <FormControl fullWidth>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Time
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={arr.time}
                        name={"time"}
                        onChange={handleChange}
                        input={<OutlinedInput label="Time" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {data?.time?.map((item, index) => (
                          <MenuItem
                            key={index}
                            value={capitalizeFirstLetter(item.value)}
                          >
                            <Checkbox
                              checked={arr.time.indexOf(item.value) > -1}
                            />
                            <ListItemText primary={item.value} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Col> */}
                    {/* <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        
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
                  </Col> */}

                    {/* <Col className="mb-3" md={3} xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        
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
                  </Col> */}
                    <Col md={3} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <InputLabel id="demo-multiple-checkbox-label">
                          Purpose
                        </InputLabel>
                        <Select
                          required
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={arr.purpose}
                          name={"purpose"}
                          onChange={handleChange}
                          input={<OutlinedInput label="Purpose" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {data?.purpose?.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={capitalizeFirstLetter(item.value)}
                            >
                              <Checkbox
                                checked={arr.purpose.indexOf(item.value) > -1}
                              />
                              <ListItemText primary={item.value} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Col>
                    <Col md={6} xs={6} sm={6} className="mb-3">
                      <FormControl fullWidth>
                        <InputLabel>Home Courses</InputLabel>
                        <Select
                          required
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={arr.favouriteCourse}
                          name={"favouriteCourse"}
                          onChange={handleChange}
                          input={<OutlinedInput label="Home Courses" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                        >
                          {data?.favouriteCourse?.map((item, index) => (
                            <MenuItem
                              key={index}
                              value={capitalizeFirstLetter(item.value)}
                            >
                              <Checkbox
                                checked={
                                  arr.favouriteCourse.indexOf(item.value) > -1
                                }
                              />
                              <ListItemText primary={item.value} />
                            </MenuItem>
                          ))}
                        </Select>
                        {/* <Autocomplete
                          id="controllable-states-demo"
                          options={data?.favouriteCourse}
                          // multiple
                          getOptionLabel={(option) =>
                            option?.value || arr?.favouriteCourse
                          }
                          name={"favouriteCourse"}
                          // value={arr?.favouriteCourse}
                          value={data?.favouriteCourse.filter((e) =>
                            arr?.favouriteCourse?.includes(e.value)
                          )}
                          onChange={(e, value) =>
                            setArr({ ...arr, favouriteCourse: value.value })
                          }
                          renderInput={(params) => (
                            <TextField
                              required
                              {...params}
                              fullWidth
                              label="Courses"
                              // name={"favouriteCourse"}
                              // value={arr?.favouriteCourse}
                              // onChange={(e) =>
                              //   setArr({
                              //     ...arr,
                              //     favouriteCourse: e.target.value,
                              //   })
                              // }
                            />
                          )}
                        /> */}
                      </FormControl>
                    </Col>
                  </Row>
                  <h4>Professional</h4>
                  <Row>
                    {/* <Col className="" md={3} xs={6} sm={6}>
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
                  </Col> */}
                    <Col className="mb-3" md={4} xs={6} sm={6}>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Enter URL of Linkedin"
                          variant="outlined"
                          name="linkdinProfile"
                          value={arr.linkdinProfile}
                          onChange={handleChange}
                        />
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
                  {/* <h4>When do I want to play?</h4>
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
                </Row> */}
                  <div className="save-button">
                    {msg ? (
                      <>
                        <p className="text-success">
                          Save has been changed Successfully
                        </p>
                      </>
                    ) : (
                      ""
                    )}
                    {customLoader ? (
                      <>
                        <p>Loading...</p>
                      </>
                    ) : (
                      ""
                    )}
                    <button
                      type="submit"
                      // onClick={() => {
                      //   const id = "62bff400d45f9d4184350c89";
                      //   navigate("/profile", { state: { id } });
                      // }}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        )}
      </Container>
    </>
  );
};

export default MyProfile;
