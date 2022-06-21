import React, { useEffect, useState } from "react";
import Header from "../../components/home/header/Header";
import FilterBar from "../../components/service/filterbar/FilterBar";
import Cards from "../../components/service/cards/Cards";
import CircularProgress from "@mui/material/CircularProgress";
// import data from "../../utilis/data";

const Service = () => {
  const [dumyData, setDumyData] = useState("");
  const [dataHistory, setDataHistory] = React.useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://social-golf-network.herokuapp.com/user")
      .then((response) => response.json())
      .then((res) => {
        const { data, success } = res;
        setDumyData(data);
        setDataHistory(data);
        setLoading(success);
      });
  }, []);

  return (
    <>
      <Header />
      <FilterBar setDumyData={setDumyData} dataHistory={dataHistory} />
      {loading ? (
        <Cards dumyData={dumyData} setDumyData={setDumyData} />
      ) : (
        <div className="text-center">
          <CircularProgress style={{ color: "#8FBF00" }} />
        </div>
      )}
    </>
  );
};

export default Service;
