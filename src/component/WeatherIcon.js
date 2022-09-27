import React from "react";
import {
  WiNightClear,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiDayShowers,
  WiDayRain,
  WiDayThunderstorm,
  WiDaySnow,
  WiFog,
  WiNightAltCloudy,
  WiNightShowers,
  WiNightRain,
  WiNightThunderstorm,
  WiSnow,
} from "react-icons/wi";

const WeatherIcon = ({ icon }) => {
  //if (!icon) icon = "01";
  //icon = icon.substr(0, 2);

  switch (icon) {
    //day
    case "01d": //clear sky
      return <WiNightClear />;
    case "02d": //few clouds
      return <WiDayCloudy />;
    case "03d": //scattered clouds
      return <WiCloud />;
    case "04d": //broken clouds
      return <WiCloudy />;
    case "09d": //shower rain
      return <WiDayShowers />;
    case "10d": //rain
      return <WiDayRain />;
    case "11d": //thunderstorm
      return <WiDayThunderstorm />;
    case "13d": //snow
      return <WiDaySnow />;
    case "50d": //mist
      return <WiFog />;
    //night
    case "01n": //clear sky
      return <WiNightClear />;
    case "02n": //few clouds
      return <WiNightAltCloudy />;
    case "03n": //scattered clouds
      return <WiCloud />;
    case "04n": //broken clouds
      return <WiCloudy />;
    case "09n": //shower rain
      return <WiNightShowers />;
    case "10n": //rain
      return <WiNightRain />;
    case "11n": //thunderstorm
      return <WiNightThunderstorm />;
    case "13n": //snow
      return <WiSnow />;
    case "50n": //mist
      return <WiFog />;

    default: //clear sky
      return <WiNightClear />;
  }
};

export default WeatherIcon;
