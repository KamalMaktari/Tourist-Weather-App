import axios from "axios";
import { default as env } from "./env.js";

async function getCurrentWeatherByCity(city) {
    const { API_KEY } = env
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
}

async function getCurrentWeatherByLatLon(lat, lon) {
    const { API_KEY } = env
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
}

async function getCurrentWeatherByCityAndCountryCody(city, code) {
    const { API_KEY } = env
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${API_KEY}&units=metric`);
}

async function getForecastWeatherByCity(city, days) {
    const { API_KEY } = env
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${days}&appid=${API_KEY}&units=metric`);
}

async function getForecastWeatherByLatLon(lat, lon, days) {
    const { API_KEY } = env
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${days}&appid=${API_KEY}&units=metric`);
}

async function getForecastWeatherByCityAndCountryCody(city, code, days) {
    const { API_KEY } = env
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city},${code}&cnt=${days}&appid=${API_KEY}&units=metric`);
}

export {
    getCurrentWeatherByCity,
    getCurrentWeatherByLatLon,
    getCurrentWeatherByCityAndCountryCody,
    getForecastWeatherByCity,
    getForecastWeatherByLatLon,
    getForecastWeatherByCityAndCountryCody
}
