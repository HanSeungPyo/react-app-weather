import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import { WiStrongWind, WiHumidity, WiCloud } from "react-icons/wi";

const weatherBox = ({ weather }) => {
  let iconurl = "";
  if (weather) {
    console.log("현재온도 : " + weather?.main.temp);
    console.log("현재습도 : " + weather?.main.humidity);
    console.log("날씨 : " + weather?.weather[0].main);
    console.log("상세날씨설명 : " + weather?.weather[0].description);
    console.log("날씨 이미지 : " + weather?.weather[0].icon);
    console.log("바람   : " + weather?.wind.speed);
    console.log("나라   : " + weather?.sys.country);
    console.log("도시이름  : " + weather?.name);
    console.log("구름  : " + weather?.clouds.all + "%");
    iconurl =
      "http://openweathermap.org/img/w/" + weather?.weather[0].icon + ".png";
  }

  return (
    <div className="weather-box">
      <div className="weather-header-box">
        {weather?.name},{weather?.sys.country}
      </div>
      <div className="weather-icon-box">
        <WeatherIcon icon={weather?.weather[0].icon} />
      </div>
      <div className="weather-temp-box">
        <b>{weather?.main.temp}</b>°C
      </div>

      <div className="weather-info-box">
        <div className="weather-left-box">
          <h1>
            <WiStrongWind />
          </h1>
          <span>{weather?.wind.speed}m/s</span>
        </div>
        <div className="weather-center-box">
          <h1>
            <WiHumidity />
          </h1>
          {weather?.main.humidity}%
        </div>
        <div className="weather-right-box">
          <h1>
            <WiCloud />
          </h1>
          {weather?.clouds.all}%
        </div>
      </div>
    </div>
  );
};

export default weatherBox;
