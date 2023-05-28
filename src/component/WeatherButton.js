import React from "react";
import { Button } from "react-bootstrap";

const WeaherButton = ({ cities, setCity, city }) => {
  return (
    <div className="weather-button-box">
      <Button
        variant={city == "Current" ? "success" : "warning"}
        className="weatherBtn"
        onClick={() => setCity("Current")}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          variant={city == item ? "success" : "warning"}
          className="weatherBtn"
          key={index}
          onClick={() => setCity(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeaherButton;
