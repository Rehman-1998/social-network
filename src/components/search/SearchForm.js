import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";
import data from "../../utilis/searchBarData";
// import state from "../../utilis/state";
// import city from "../../utilis/city";
// import county from "../../utilis/county";
import americaCity from "../../utilis/americaCity";
import banner from "../../assets/images/banner3.jpg";
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
import { useNavigate } from "react-router";
import DatePicker from "react-multi-date-picker";
import "./searchform.css";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css"; // If using WebPack and style-loader.
// import checkcity from "../../utilis/checkcity";
// import zipCode from "../../utilis/zipCode.json";
// import state from "../../utilis/filterZip";
// const usZips = require("us-zips/array");

const SearchForm = () => {
  const navigate = useNavigate();
  const [arr, setArr] = React.useState({
    age: [],
    gender: "",
    country: "",
    city: "",
    zipCode: "",
    distance: [],
    matirialStatus: "",
    drinker: "",
    smoker: [],
    race: [],
    religion: [],
    politicalView: [],
    skillLevel: [],
    currentHandicap: [],
    oftenPlay: "",
    purpose: [],
    professional: "",
    industry: [],
    availability: [],
    date: [],
    playState: "",
    playCity: "",
    playZipCode: "",
    playDistance: "",
    favouriteCourse: [],
    playCourse: [],
    playTime: [],
    professionalIndustry: [],
    company: [],
    companyTitle: [],
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
    console.log("form submit===>>", arr);
    navigate("/results");
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    // variant: "menu",
    // getContentAnchorEl: null,
  };

  // console.log("Zip Code===>", usZips);

  //======= ZIP CODe====

  // const zipData = usZips.map((item, index) => {
  //   return { zip: item.zipCode };
  // });

  // console.log("Zip Code===>", usZips.length);

  return (
    <>
      <Container className="g-0" fluid>
        <div
          className="bg-image"
          style={{
            background: `url(${banner})`,
          }}
        >
          <Container className="container-bg ">
            <h5>Find My Partner</h5>
            <form onSubmit={handleSubmit}>
              <Row className="py-3">
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.gender}
                      name={"gender"}
                      onChange={handleChange}
                      select
                      label="Gender"
                    >
                      {data?.gender?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Age
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      required
                      value={arr.age}
                      name={"age"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Age" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.age?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.age.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.age}
                      name={"age"}
                      onChange={handleChange}
                      variant="outlined"
                      select
                      label="Age"
                      SelectProps={{
                        multiple: true,
                      }}
                    >
                      <MenuItem disabled>Select Multiple</MenuItem>
                      {data?.age?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col> */}
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
                        <TextField
                          required
                          {...params}
                          fullWidth
                          label="State"
                        />
                      )}
                    />
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="City"
                      required
                      variant="outlined"
                      name={"city"}
                      value={arr?.city}
                      onChange={(e) => setArr({ ...arr, city: e.target.value })}
                    />
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={zipData}
                      getOptionLabel={(option) => option?.zip || arr.zipCode}
                      name={"zipCode"}
                      value={arr?.zipCode}
                      onChange={(e, value) =>
                        setArr({ ...arr, zipCode: value.zip })
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth label="Zip Code" />
                      )}
                    />
                  </FormControl>
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-basic"
                      label="Zip Code"
                      required
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
                    <TextField
                      required
                      value={arr.distance}
                      name={"distance"}
                      onChange={handleChange}
                      select
                      label="Distance Willing to Travel"
                    >
                      {data?.distance?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {item.value} miles
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Distance Willing to Travel
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.distance}
                      name={"distance"}
                      onChange={handleChange}
                      input={
                        <OutlinedInput label="Distance Willing to Travel" />
                      }
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.distance?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.distance.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
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

                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                {/* CheckBox */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Smoker
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
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
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Race
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.race}
                      name={"race"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Race" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.race?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.race.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Religion
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.religion}
                      name={"religion"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Religion" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.religion?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.religion.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Political View
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.politicalView}
                      name={"politicalView"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Political View" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.politicalView?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.politicalView.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Skill Level
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.skillLevel}
                      name={"skillLevel"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Skill Level" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.skillLevel?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.skillLevel.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Current Handicap
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.currentHandicap}
                      name={"currentHandicap"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Current Handicap" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.currentHandicap?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={
                              arr.currentHandicap.indexOf(item.value) > -1
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
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Purpose
                    </InputLabel>
                    <Select
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
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.purpose.indexOf(item.value) > -1}
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
                      Industry
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.industry}
                      name={"industry"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Industry" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.industry?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.industry.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col> */}
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col> */}
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <DatePicker
                    // value={new Date()}
                    onChange={(e, value) =>
                      console.log("e Value===>>>", e, value)
                    }
                    format={"MM/DD/YYYY"}
                    multiple={true}
                    placeholder={"Days *"}
                  />
                </Col> */}
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.availability}
                      name={"availability"}
                      onChange={handleChange}
                      select
                      label="Time"
                      SelectProps={{
                        multiple: true,
                      }}
                    >
                      {data?.availability?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Availability
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.availability}
                      name={"availability"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Availability" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.availability?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.availability.indexOf(item.value) > -1}
                          />
                          <ListItemText
                            primary={capitalizeFirstLetter(item.value)}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.professional}
                      name={"professional"}
                      onChange={handleChange}
                      select
                      label="Professional"
                    >
                      {data?.professional?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col> */}
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.professional}
                      name={"professional"}
                      onChange={handleChange}
                      label="Network"
                    ></TextField>
                  </FormControl>
                </Col> */}
                <Col md={12}>
                  <div>
                    <h5>Professional</h5>
                  </div>
                </Col>
                <Col md={8} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Industry
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.professionalIndustry}
                      name={"professionalIndustry"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Industry" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.industry?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={
                              arr.professionalIndustry.indexOf(item.value) > -1
                            }
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    {/* <TextField
                      required
                      value={arr.company}
                      name={"company"}
                      onChange={handleChange}
                      label="Company"
                    ></TextField> */}
                    <TagsInput
                      focusedClassName={"test-border"}
                      name={"company"}
                      required
                      value={arr.company}
                      onChange={(e) => setArr({ ...arr, company: e })}
                      inputProps={{
                        placeholder: "Company *",
                      }}
                    />
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={data?.company}
                      getOptionLabel={(option) => option?.value || arr.company}
                      name={"company"}
                      value={arr?.company}
                      onChange={(e, value) =>
                        setArr({ ...arr, company: value.value })
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth label="Company" />
                      )}
                    />
                  </FormControl>
                </Col> */}
                <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    {/* <TextField
                      required
                      value={arr.companyTitle}
                      name={"companyTitle"}
                      onChange={handleChange}
                      label="Company Title"
                    ></TextField> */}
                    <TagsInput
                      required
                      focusedClassName={"test-border"}
                      name={"companyTitle"}
                      value={arr.companyTitle}
                      onChange={(e) => setArr({ ...arr, companyTitle: e })}
                      inputProps={{
                        placeholder: "Company Title *",
                      }}
                    />
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={data?.companyTitle}
                      getOptionLabel={(option) =>
                        option?.value || arr.companyTitle
                      }
                      name={"companyTitle"}
                      value={arr?.companyTitle}
                      onChange={(e, value) =>
                        setArr({ ...arr, companyTitle: value.value })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          label="Company Title"
                        />
                      )}
                    />
                  </FormControl>
                </Col> */}

                <Col md={12}>
                  <div>
                    <h5>Where I want to play</h5>
                  </div>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={americaCity.data}
                      getOptionLabel={(option) => option?.name || arr.playState}
                      name={"playState"}
                      value={arr?.playState}
                      onChange={(e, value) =>
                        setArr({ ...arr, playState: value.name })
                      }
                      renderInput={(params) => (
                        <TextField
                          required
                          {...params}
                          fullWidth
                          label="State"
                        />
                      )}
                    />
                  </FormControl>
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={city.data}
                      getOptionLabel={(option) => option?.city || arr.playCity}
                      name={"playCity"}
                      value={arr?.playCity}
                      onChange={(e, value) =>
                        setArr({ ...arr, playCity: value.city })
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth label="City" />
                      )}
                    />
                  </FormControl>
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      name={"playCity"}
                      value={arr?.playCity}
                      onChange={(e) =>
                        setArr({ ...arr, playCity: e.target.value })
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
                        <TextField {...params} fullWidth label="Zip Code" />
                      )}
                    />
                  </FormControl>
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      id="outlined-basic"
                      label="Zip Code"
                      variant="outlined"
                      name={"playZipCode"}
                      value={arr?.playZipCode}
                      onChange={(e) =>
                        setArr({ ...arr, playZipCode: e.target.value })
                      }
                    />
                  </FormControl>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.playDistance}
                      name={"playDistance"}
                      onChange={handleChange}
                      select
                      label="Distance Willing to Travel"
                    >
                      {data?.distance?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {item.value} miles
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col>
                {/* <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.favouriteCourse}
                      name={"favouriteCourse"}
                      onChange={handleChange}
                      select
                      label="Courses"
                      SelectProps={{
                        multiple: true,
                      }}
                    >
                      <MenuItem disabled>Select Multiple</MenuItem>
                      {data?.favouriteCourse?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col> */}
                {/* <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Courses
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.favouriteCourse}
                      name={"favouriteCourse"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Courses" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.favouriteCourse?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={
                              arr.favouriteCourse.indexOf(item.value) > -1
                            }
                          />
                          <ListItemText
                            primary={capitalizeFirstLetter(item.value)}
                          />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col> */}
                <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={data?.favouriteCourse}
                      getOptionLabel={(option) =>
                        option?.value || arr.playCourse
                      }
                      name={"playCourse"}
                      value={arr?.playCourse}
                      onChange={(e, value) =>
                        setArr({ ...arr, playCourse: value.value })
                      }
                      renderInput={(params) => (
                        <TextField
                          required
                          {...params}
                          fullWidth
                          label="Courses"
                          name={"playCourse"}
                          value={arr?.playCourse}
                          onChange={(e) =>
                            setArr({ ...arr, playCourse: e.target.value })
                          }
                        />
                      )}
                    />
                  </FormControl>
                </Col>
                {/* ********* When I want to Play Section ********* */}
                <Col md={12}>
                  <div>
                    <h5>When I want to play</h5>
                  </div>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <DatePicker
                    onChange={(e, value) =>
                      console.log("e Value===>>>", e, value)
                    }
                    required
                    multiple={true}
                    format={"MM/DD/YYYY"}
                    placeholder={"Day(s) *"}
                  />
                </Col>
                {/* <Col md={3} xs={6} sm={6} className="mb-3">
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
                      {data?.availability?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col> */}
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel required id="demo-multiple-checkbox-label">
                      Time
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={arr.playTime}
                      name={"playTime"}
                      onChange={handleChange}
                      input={<OutlinedInput label="Time" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {data?.time?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          <Checkbox
                            checked={arr.playTime.indexOf(item.value) > -1}
                          />
                          <ListItemText primary={item.value} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Col>
                {/* <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={data?.favouriteCourse}
                      getOptionLabel={(option) =>
                        option?.value || arr.playCourse
                      }
                      name={"playCourse"}
                      value={arr?.playCourse}
                      onChange={(e, value) =>
                        setArr({ ...arr, playCourse: value.value })
                      }
                      renderInput={(params) => (
                        <TextField {...params} fullWidth label="Courses" />
                      )}
                    />
                  </FormControl>
                </Col> */}
              </Row>
              <div>
                <button className="submit-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SearchForm;
