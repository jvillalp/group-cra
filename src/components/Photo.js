import React, { useState, useEffect } from "react";
import axios from "axios";

const Photo = props => {

  return (
    
    <div>
      <h1>Name: {props.name}</h1>
      <p>height: {props.height}</p>
      <p>gender: {props.gender}</p>
      <p>homeworld: {props.homeworld}</p>
    </div>
  );
};
export default Photo;
