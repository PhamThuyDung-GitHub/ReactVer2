import React from "react";
import { useParams } from "react-router-dom";
import dataPeople from "./dataPeople";

const PeopleInfo = () => {
  const idPeople = useParams();
  const infoPeople = dataPeople.find((item) => item.id === Number(idPeople.slug));

  return (
    <div className="peopleInfo">
      <h1>{infoPeople.name}</h1>
      <ul>
        <li>ID: <span>{infoPeople.id}</span></li>
        <li>Address: <span>{infoPeople.address}</span></li>
        <li>Department: <span>{infoPeople.department}</span></li>
      </ul>
    </div>
  );
};

export default PeopleInfo;
