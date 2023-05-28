import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";

//1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//2. 날씨정보에는 위치와 나라, 날씨 아이콘, 도 씨, 풍속, 습도, 구름 정보가 나타남.
//3. 다섯 개의 버튼이 있다. (현재 위치, 4개는 다른 도시) 추후 추가 용이하도록 배열로 처리
//4. 도시 버튼을 클릭할 때마다 도시별 날씨가 나온다.
//5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
//6. 데이터를 받아 오는 동안 로딩 스피너가 돈다.

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Current");

  const [loading, setLoading] = useState(false);

  const cities = ["paris", "new york", "Tokyo", "seoul"];
  const [apiError, setApierror] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setApierror(err.message);
      setLoading(false);
    }
  };

  const getWeatherByCity = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();

      setWeather(data);
      setLoading(false);
    } catch (err) {
      setApierror(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city == "Current") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : !apiError ? (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} city={city} />
        </div>
      ) : (
        <div className="container">{apiError}</div>
      )}
    </div>
  );
}

export default App;
