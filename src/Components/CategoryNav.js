import React from "react";
import "./styles.css";

const CategoryNav = (props) => {
  return (
    <>
    <div className="categories"><span>Categories</span></div>
      <div className="categoryNav">
        <ul>
          <li>
            <button onClick={() => {props.onClick("")}}>All</button>
          </li>
          <li>
            <button onClick={() => {props.onClick("1")}}>Business</button>
          </li>
          <li>
            <button onClick={() => {props.onClick("2")}} >Economy</button>
          </li>
          <li>
            <button onClick={() => {props.onClick("3")}}>Technology</button>
          </li>
          <li>
            <button onClick={() => {props.onClick("4")}}>Sports</button>
          </li>
          <li>
            <button onClick={() => {props.onClick("5")}}>Culinary</button>
          </li>
          <li>
            <button onClick={() => {props.onClick("6")}}>International</button>
          </li>
          <li>
            <button  onClick={() => {props.onClick("7")}}>Fiction</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryNav;
