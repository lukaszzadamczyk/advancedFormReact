import React from "react";
import "../style/category.css";

const Category = (props) => {
  const options = props.category.map((option) => (
    <option key={option.id} value={option.id}>
      {option.name}
    </option>
  ));
  return (
    <>
      <select id="category">
        <option>Select category</option>
        {options}
      </select>
      <p id="category">
        Desribes topic and people who should be interested in this event
      </p>
    </>
  );
};

export default Category;
