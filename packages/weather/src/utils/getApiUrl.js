import { API_ENDPOINT, API_KEY } from "../constants";

export const getApiUrl = (url) => {
    return `${API_ENDPOINT}${url}&appid=${API_KEY}`;
};