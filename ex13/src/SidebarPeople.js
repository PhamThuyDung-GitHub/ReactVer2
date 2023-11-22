import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "./people.css";
import dataPeople from "./dataPeople";
import PeopleInfo from "./PeopleInfo";

const SidebarPeople = () => {
  return (
    <div className="People">
      <div className="behind">
        <div className="sideBar">
          <ul>
            {dataPeople.map((item, index) => (
              <li>
                <NavLink to={`/people/${item.id}`}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="infoPeople">
        <Routes>
          <Route path="/people/:slug" element={<PeopleInfo />} />
        </Routes>
      </div>
      <h5>code by Gia Han</h5>
    </div>
  );
};

export default SidebarPeople;
