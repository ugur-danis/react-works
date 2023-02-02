import { createContext, useContext, useState } from 'react';

const WeatherForecastContext = createContext();

export const WeatherForecastProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState();
    const [cityWeatherForecastList, setCityWeatherForecastList] = useState([]);

    const values = {
        selectedCity,
        setSelectedCity,
        cityWeatherForecastList,
        setCityWeatherForecastList
    };

    return (
        <WeatherForecastContext.Provider value={values}>{children}</WeatherForecastContext.Provider>
    );
};

export const useWeatherForecast = () => useContext(WeatherForecastContext);