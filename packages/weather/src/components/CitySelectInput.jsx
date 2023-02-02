import { useWeatherForecast } from '../context/WeatherForecastContext';
import cities from '../mocks/cities.json';

export const CitySelectInput = () => {
    const { selectedCity, setSelectedCity } = useWeatherForecast();

    return (
        <select value={selectedCity}
            onChange={e => setSelectedCity(e.target.value)}>
            {cities.map((city) => (
                <option key={city.id}>{city.name}</option>
            ))}
        </select>
    );
};