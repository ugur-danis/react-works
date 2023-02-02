import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import { useState, useEffect } from 'react';
import { get5DaysForecast, getGeocoding, } from './services';
import { CitySelectInput, WeatherForecastItem } from './components';
import './App.css';
import { useWeatherForecast } from './context/WeatherForecastContext';

dayjs.locale('tr');

const App = () => {
  const { selectedCity, setSelectedCity, cityWeatherForecastList, setCityWeatherForecastList } = useWeatherForecast();

  const getClientLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((positon) => {
        const { latitude: lat, longitude: lon } = positon.coords;
        resolve({ lat, lon });
      }, reject);
    });
  };

  const getWeatherForecast = async () => {
    let location;
    if (selectedCity) {
      location = await getGeocoding(selectedCity);
    }
    else {
      location = await getClientLocation();
    }

    const response = await get5DaysForecast(location.lat, location.lon);
    setSelectedCity(selectedCity || response.city.name);

    const weatherForecastList = response.list
      .reduce((acc, item) => {
        if (!acc.find(x => x.dt_txt.split(' ').at(0) === item.dt_txt.split(' ').at(0))) {
          acc.push(item);
        }

        return acc;
      }, []);

    setCityWeatherForecastList(weatherForecastList);
  };

  useEffect(() => {
    getWeatherForecast();
  }, [selectedCity]);

  return (
    <div className="wrapper">
      <div className="city-select-input-wrapper">
        <CitySelectInput />
      </div>

      <div className="weather-forecast-wrapper">
        {cityWeatherForecastList.map((wf, i) => (
          <WeatherForecastItem data={wf} key={i} />
        ))}
      </div>
    </div>
  );
};

export default App;
