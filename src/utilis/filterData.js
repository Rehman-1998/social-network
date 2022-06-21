// import data from "./data";

// **************** UNIVERSAL Filter ****************
export const filterFunction = (value, query, setDumyData, dataHistory) => {
  if (query === "age") {
    if (!value) {
      return setDumyData(dataHistory);
    }
    const min = parseInt(value.split("-")[0]);
    const max = parseInt(value.split("-")[1]);
    const filterData = dataHistory?.filter((item) => {
      return min <= item[query] && item[query] <= max;
    });

    setDumyData(filterData);
  } else if (!value) {
    setDumyData(dataHistory);
  } else {
    const filterData = dataHistory?.filter((item) => {
      return item[query] === value;
    });
    setDumyData(filterData);
  }
};

export const multipleFilter = (temp, setDumyData, dataHistory) => {
  // eslint-disable-next-line array-callback-return
  const filterData = dataHistory?.filter((item) => {
    const itemm = temp.map((element) => {
      return item[element] !== "";
    });
    if (itemm.indexOf(false) === -1) {
      return itemm;
    }
  });
  setDumyData(filterData);
};

// export default filterFunction;
