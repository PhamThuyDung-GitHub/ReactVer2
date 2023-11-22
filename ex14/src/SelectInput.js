import React, { useState } from "react";

const SelectInput = () => {
  const [select, setSelect] = useState("");

  return (
    <div>
      {select}
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
    </div>
  );
};

export default SelectInput;
