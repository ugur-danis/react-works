import axios from 'axios';
import { getApiUrl } from '../utils';

export const get5DaysForecast = async (lat, lon) => {
    const apiUrl = `data/2.5/forecast?units=metric&lang=tr&lat=${lat}&lon=${lon}`;

    const response = await axios(getApiUrl(apiUrl));
    return response.data;
};