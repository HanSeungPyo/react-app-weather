import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Container,Row, Col, Table } from 'react-bootstrap'
import WeatherIcon from './WeatherIcon';






const weatherBox = ({weather}) => {
 

  /*
  let iconurl="";
  if(weather){
  console.log("현재온도 : "+ weather?.main.temp );
  console.log("현재습도 : "+ weather?.main.humidity);
  console.log("날씨 : "+ weather?.weather[0].main );
  console.log("상세날씨설명 : "+ weather?.weather[0].description );
  console.log("날씨 이미지 : "+ weather?.weather[0].icon );
  console.log("바람   : "+ weather?.wind.speed );
  console.log("나라   : "+ weather?.sys.country );
  console.log("도시이름  : "+ weather?.name );
  console.log("구름  : "+ (weather?.clouds.all) +"%" );    
  iconurl = "http://openweathermap.org/img/w/" + weather?.weather[0].icon + ".png";
  }
  */


  return (
    <div className='weather-box'>
     <div className="left-box">
      <WeatherIcon/>
     </div>
     <div className="right-box">
      <div>1</div>
      <div>2</div>
      <div>3</div>
     </div>
     
    </div>
  )
}

export default weatherBox