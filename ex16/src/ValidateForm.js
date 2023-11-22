import React, { useState } from "react";

const ValidateForm = () => {
  const [values, setValues] = useState({
    "address-1": "",
    "address-2": "",
    "address-3": "",
    "address-4": "",
    price: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    "address-1": "",
    "address-2": "",
    "address-3": "",
    "address-4": "",
    price: "",
    date: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrs = {
      "address-1": "",
      "address-2": "",
      "address-3": "",
      "address-4": "",
      price: "",
      date: "",
    };

    if (values["address-1"].length < 10) {
      newErrs["address-1"] = "Too Short!";
    }
    if (!values["address-2"]) {
      newErrs["address-2"] = "Required";
    }
    if (!values["address-3"]) {
      newErrs["address-3"] = "Required";
    }
    if (!values["address-4"]) {
      newErrs["address-4"] = "Required";
    }
    if (values["price"] < 102) {
      newErrs["price"] = "Must be at least 102";
    }
    if (!values["date"]) {
      newErrs["date"] = "Required";
    }
    setErrors(newErrs);
  };

  return (
    <div className="validate">
      <form onSubmit={handleSubmit}>
        <h4>Address 1:</h4>
        <input type="text" name="address-1" onChange={handleInputChange} />
        <p style={{ color: "red" }}>{errors["address-1"]}</p>
        <h4>Address 2:</h4>
        <input type="text" name="address-2" onChange={handleInputChange} />
        <p style={{ color: "red" }}>{errors["address-2"]}</p>
        <h4>Address 3:</h4>
        <input type="text" name="address-3" onChange={handleInputChange} />
        <p style={{ color: "red" }}>{errors["address-3"]}</p>
        <h4>Address 4:</h4>
        <input type="text" name="address-4" onChange={handleInputChange} />
        <p style={{ color: "red" }}>{errors["address-4"]}</p>
        <h4>Price:</h4>
        <input type="text" name="price" onChange={handleInputChange} />
        <p style={{ color: "red" }}>{errors["price"]}</p>
        <h4>Required By:</h4>
        <input type="date" name="date" onChange={handleInputChange} />
        <p style={{ color: "red" }}>{errors["date"]}</p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ValidateForm;
