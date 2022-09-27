import React from 'react'
import 
{ 
    WiNightClear, WiDayCloudy, WiCloud, WiCloudy, WiDayShowers, WiDayRain, WiDayThunderstorm, WiDaySnow, WiFog, 
} 
from "react-icons/wi";

const WeatherIcon = ({icon}) => {

    //if(!icon) icon="01";
    //icon = icon.substr(0,2);

    switch(icon)
    {
      case '01':  //clear sky
        return  <WiNightClear/>
      case '02':  //few clouds
        return  <WiDayCloudy/>
      case '03':  //scattered clouds
        return  <WiCloud/>
      case '04':  //broken clouds
        return  <WiCloudy/>
      case '09':  //shower rain
        return  <WiDayShowers/>
      case '10':  //rain
        return  <WiDayRain/>
      case '11':  //thunderstorm
        return  <WiDayThunderstorm/>
      case '13':  //snow
        return  <WiDaySnow/>
      case '50':  //mist
        return  <WiFog/>
      default :  //clear sky
        return <WiNightClear/> 
    }  
}

export default WeatherIcon