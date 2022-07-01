import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";
import data from "../../utilis/data";
import state from "../../utilis/state";
import city from "../../utilis/city";
import county from "../../utilis/county";
import banner from "../../assets/images/banner3.jpg";
import { MenuItem, FormControl, TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router";
import DatePicker from "react-multi-date-picker";
import "./searchform.css";

const SearchForm = () => {
  const navigate = useNavigate();
  const [arr, setArr] = React.useState({
    age: "",
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
    currentHandicap: "",
    oftenPlay: "",
    purpose: [],
    professional: "",
    industry: "",
    availability: "",
    date: [],
    playState: "",
    playCity: "",
    playZipCode: "",
    playDistance: "",
    playCourse: "",
    favouriteCourse: [],
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
            <h5>Find Your Partner</h5>
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
                    <Autocomplete
                      id="controllable-states-demo"
                      options={county.data}
                      getOptionLabel={(option) => option?.county || arr.country}
                      name={"country"}
                      value={arr?.country}
                      onChange={(e, value) =>
                        setArr({ ...arr, country: value.county })
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
                      // isOptionEqualToValue={(option, value) =>
                      //   option.zip === value
                      // }
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
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={state.data}
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
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.distance}
                      name={"distance"}
                      onChange={handleChange}
                      select
                      label="Willing to Drive"
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

                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
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
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.availability}
                      name={"availability"}
                      onChange={handleChange}
                      select
                      label="When you want to play"
                    >
                      {data?.availability?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <DatePicker
                    // value={new Date()}
                    onChange={(e, value) =>
                      console.log("e Value===>>>", e, value)
                    }
                    multiple={true}
                    placeholder={"When do you want to play"}
                  />
                </Col>
                <Col md={12}>
                  <div>
                    <h5>Where you want to play</h5>
                  </div>
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={county.data}
                      getOptionLabel={(option) =>
                        option?.county || arr.playState
                      }
                      name={"playState"}
                      value={arr?.playState}
                      onChange={(e, value) =>
                        setArr({ ...arr, playState: value.county })
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
                      getOptionLabel={(option) => option?.city || arr.playCity}
                      // isOptionEqualToValue={(option, value) =>
                      //   option.zip === value
                      // }
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
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <Autocomplete
                      id="controllable-states-demo"
                      options={state.data}
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
                </Col>
                <Col md={3} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.playDistance}
                      name={"playDistance"}
                      onChange={handleChange}
                      select
                      label="Willing to Drive"
                    >
                      {data?.distance?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {item.value} miles
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                </Col>
                <Col md={6} xs={6} sm={6} className="mb-3">
                  <FormControl fullWidth>
                    <TextField
                      required
                      value={arr.favouriteCourse}
                      name={"favouriteCourse"}
                      onChange={handleChange}
                      select
                      label="Course"
                      SelectProps={{
                        multiple: true,
                      }}
                    >
                      {data?.favouriteCourse?.map((item, index) => (
                        <MenuItem key={index} value={item.value}>
                          {capitalizeFirstLetter(item.value)}
                        </MenuItem>
                      ))}
                    </TextField>
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
