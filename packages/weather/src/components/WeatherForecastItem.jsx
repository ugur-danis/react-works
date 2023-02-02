import dayjs from 'dayjs';
import { getWeatherIcon } from '../services';

export const WeatherForecastItem = ({ data }) => {
    const isCurrentDate = dayjs.unix(data.dt).format('DD-MM-YYYY') === dayjs().format('DD-MM-YYYY');

    return (
        <div className={`weather-forecast-item ${isCurrentDate ? ' currentDay' : ''}`}>
            <h4 className="day-title">{
                dayjs.unix(data.dt).format('dddd')}
            </h4>
            <img src={getWeatherIcon(data.weather.at(0).icon)} />
            <span className='weather-description'>{data.weather.at(0).description}</span>
            <div className="day-temp">
                <strong>{data.main.temp_max + '°'}</strong>
                <span>{data.main.temp_min + '°'}</span>
            </div>
        </div>
    );
};
