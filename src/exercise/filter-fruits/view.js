import React, { useState } from "react";
import "./styles.css";
import "../styles.css";

const FRUITS = [
  "Banana",
  "Apple",
  "Orange",
  "Mango",
  "Pineapple",
  "Watermelon"
];

const View = () => {
  const [filterList, setFilterList] = useState(FRUITS);

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(FRUITS);
      return;
    }
    const filteredValues = FRUITS.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };

  return (
    <div className="filter-fruits exercise">
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
    </div>
  );
};

export default View;
