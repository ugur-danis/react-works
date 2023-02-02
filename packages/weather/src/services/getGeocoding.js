import axios from "axios";
import { getApiUrl } from "../utils";

export const getGeocoding = async (cityName, limit = 1) => {
    const apiUrl = `geo/1.0/direct?q=${cityName}&limit=${limit}`;

    const response = await axios(getApiUrl(apiUrl));
    return response.data.at(0);
};