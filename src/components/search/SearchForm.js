import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";
import data from "../../utilis/data";
import state from "../../utilis/state";
import banner from "../../assets/images/banner3.jpg";
import { MenuItem, FormControl, TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router";
import "./searchform.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [arr, setArr] = React.useState({
    age: "",
    gender: "",
    drinker: "",
    matirialStatus: "",
    smoker: "",
    religion: "",
    race: "",
    skillLevel: "",
    oftenPlay: "",
    purpose: "",
    distance: "",
    politicalView: "",
    zipCode: "",
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
    navigate("/results", { state: arr });
  };

  return (
    <>
      <Container className="g-0" fluid>
        <div
          className="banner-image"
          style={{
            background: `url(${banner})`,
          }}
        >
          <Container className="container-bg ">
            <h5>Find Your Partner</h5>
            <form onSubmit={handleSubmit}>
              <Row className="py-3">
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.age}
                      name={"age"}
                      onChange={handleChange}
                      variant="outlined"
                      select
                      label="Age"
                    >
                      {data?.age?.map((item, index) => (
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
                    <TextField
                      required
                      value={arr.matirialStatus}
                      name={"matirialStatus"}
                      onChange={handleChange}
                      select
                      label="Material Status"
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
                      value={arr.smoker}
                      name={"smoker"}
                      onChange={handleChange}
                      select
                      label="Smoke"
                    >
                      {data?.smoker?.map((item, index) => (
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
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.purpose}
                      name={"purpose"}
                      onChange={handleChange}
                      select
                      label="Purpose"
                    >
                      {data?.purpose?.map((item, index) => (
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
                      value={arr.distance}
                      name={"distance"}
                      onChange={handleChange}
                      select
                      label="Distance"
                    >
                      {data?.distance?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {item.value} miles
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={state.data}
                      getOptionLabel={(option) => option?.zip || arr.zipCode}
                      // isOptionEqualToValue={(option, value) =>
                      //   option.zip === value
                      // }
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
                </Col>
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
