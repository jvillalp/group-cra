import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Photo from "./components/Photo.js";
import styled from "styled-components";
import uuid from "react-uuid";
import "./App.css";

const AppStyle = styled.div`
  background-image: url("https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80
  ");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 800px;
`;

const App = () => {
  const [profileName, setProfileName] = useState("Juana");
  const [title, setTitle] = useState("NASA Photo of the Day");
  const [starWarsChars, setStarWarsChars] = useState([]);
  const [request, setRequest] = useState([]);


  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log("StarWars", response.data.results);
        setStarWarsChars(response.data.results);
      })
      .catch(error => {
        console.log("the data was not obtained", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/planets/1")
      .then(response => {
        console.log(response.data);
        // setRequest(response.data);
      })
      .catch(error => {
        console.log("the data was not obtained", error);
      });
  });

  return (
    <AppStyle>
      <Header name={profileName} title={title} />
      {starWarsChars.map(starWarsChar => {
        return (
          <Photo
            key={uuid()}
            name={starWarsChar.name}
            gender={starWarsChar.gender}
            height={starWarsChar.height}
            homeworld={starWarsChar.homeworld}
          />
        );
      })}
    </AppStyle>
  );
};

export default App;
