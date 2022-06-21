import React from "react";
import { Container } from "react-bootstrap";
import "./filter.css";
import data from "../../../utilis/data";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { filterFunction } from "../../../utilis/filterData";
import { capitalizeFirstLetter } from "../../../utilis/capitalizeFirstLetter";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import state from "../../../utilis/state";

const FilterBar = ({ setDumyData, dataHistory }) => {
  const [arr, setArr] = React.useState({
    gender: "",
    age: "",
    matirialStatus: "",
    drinker: "",
    smoker: "",
    race: "",
    religion: "",
    politicalView: "",
    skillLevel: "",
    oftenPlay: "",
    purpose: "",
    zipCode: "Zip",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArr((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Container className="py-3">
        <div className="filter-bar-main">
          <div className="form-div">
            <FormControl
              id="gender-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.gender}
                name={"gender"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "gender",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Gender</em>
                </MenuItem>
                {data?.gender?.map((item, index) => (
                  <MenuItem value={item.value} key={index}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-div">
            <FormControl
              id="price-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.age}
                name={"age"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "age",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Age</em>
                </MenuItem>
                {data?.age?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-div">
            <Autocomplete
              disablePortal
              id="controllable-states-demo"
              className="my-auto-class"
              sx={{ minWidth: 120 }}
              options={state.data}
              name={"zipCode"}
              value={arr.zipCode}
              getOptionLabel={(option) => option?.zip || arr.zipCode}
              renderInput={(params) => <TextField {...params} zip="zipCode" />}
              onChange={(e, value) => {
                if (!value) {
                  setDumyData(dataHistory);
                  setArr({ ...arr, zipCode: "Zip" });
                } else {
                  setArr({ ...arr, zipCode: value.zip });
                  filterFunction(
                    parseInt(value.zip),
                    "zipCode",
                    setDumyData,
                    dataHistory
                  );
                }
              }}
            />
          </div>
          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.matirialStatus}
                name={"matirialStatus"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "matirialStatus",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Material Status</em>
                </MenuItem>
                {data?.materialStatus?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.drinker}
                name={"drinker"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "drinker",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Drinker</em>
                </MenuItem>
                {data?.drinker?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.smoker}
                name={"smoker"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "smoker",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Somker</em>
                </MenuItem>
                {data?.smoker?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {/****************  Second Bar ***************** */}
        <div className="filter-bar-main mt-3">
          <div className="form-div">
            <FormControl
              id="gender-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.religion}
                name={"religion"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "religion",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Religion</em>
                </MenuItem>
                {data?.religion?.map((item, index) => (
                  <MenuItem value={item.value} key={index}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.race}
                name={"race"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "race",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Race</em>
                </MenuItem>
                {data?.race?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-div">
            <FormControl
              id="price-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.politicalView}
                name={"politicalView"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "politicalView",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Political Views</em>
                </MenuItem>
                {data?.politicalView?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.skillLevel}
                name={"skillLevel"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "skillLevel",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Skill Level</em>
                </MenuItem>
                {data?.skillLevel?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr.oftenPlay}
                name={"oftenPlay"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "oftenPlay",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Often Play</em>
                </MenuItem>
                {data?.oftenPlay?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="form-div">
            <FormControl
              id="type-select"
              className="matirial-select my-class"
              sx={{ m: 1, minWidth: 120 }}
            >
              <Select
                value={arr?.purpose}
                name={"purpose"}
                onChange={(e) => {
                  handleChange(e);
                  filterFunction(
                    e.target.value,
                    "purpose",
                    setDumyData,
                    dataHistory
                  );
                }}
                displayEmpty
              >
                <MenuItem value={""}>
                  <em>Purpose to Play</em>
                </MenuItem>
                {data?.purpose?.map((item, index) => (
                  <MenuItem key={index} value={item.value}>
                    {capitalizeFirstLetter(item.value)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FilterBar;
