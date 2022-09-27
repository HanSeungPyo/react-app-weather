import './App.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱 실행되자마자 현재위치기반의 날씨가 보인다. 
//2. 날씨정보에는 도씨, 섭씨, 화씨, 날씨상태
//3. 다섯개의 버튼이 있다. (현재위치 4개는 다른 도시) 
//4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.



function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Current");
  
  const [loading, setLoading] = useState(false);

  const cities = ['paris','new york','Tokyo','seoul']
  const [apiError, setApierror] =useState("");
 

  const getCurrentLocation = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) =>{ //비동기가 쓰이기 때문에 async 사용
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=704e1477b3b6cc7eb629749daae59a63&units=metric`
      setLoading(true);
      let response = await fetch(url)
      let data = await response.json(); //비동기 
      setWeather(data)
      setLoading(false);
    }catch(err){
      setApierror(err.message)
      setLoading(false);
    }
  }

  const getWeatherByCity =  async() =>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=704e1477b3b6cc7eb629749daae59a63&units=metric`
      setLoading(true);
      let response = await fetch(url)
      let data = await response.json(); //비동기 
      
      setWeather(data)
      setLoading(false);
    }catch(err){
      setApierror(err.message)
      setLoading(false);
    }
  }
 

  useEffect(()=>{
    if(city=="Current")
    {
      getCurrentLocation()
    }else{
      getWeatherByCity()
    }
  },[city]) //배열안에 아무것도 안주면 componentDidmount 처럼 실행

 
 
  /* useEffect(()=>{
    if(city!="")
    {
      getWeatherByCity()
    }
  },[city])  */
 

  return (
    
    <div >
      {loading?
        <div className='container'>
          <ClipLoader color='#f88c6b' loading={loading}  size={150} />
        </div>
        :
        !apiError?
        <div className='container'>
          <WeatherBox weather={weather}/>
          <WeatherButton cities={cities} setCity={setCity} city={city}/>
        </div>
        :
        <div className='container'>
          {apiError}
        </div>
      }
      
    </div>
  );
}

export default App;
