import express from 'express';
import { WEATHER_API_ENDPOINT } from '../config.js';

const weatherRouter = express.Router();

weatherRouter.get('/getWeather', async (req, res) => {
  const { q } = req.query;
  try {
    const apiUrl = `${WEATHER_API_ENDPOINT}?q=${q}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Internal Server Error');
  }
});

weatherRouter.get('/getWeatherbyLat', async (req, res) => {
  const { lat, lon } = req.query;
  try {
    const apiUrl = `${WEATHER_API_ENDPOINT}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.WEATHER_API_KEY}`;
    const response = await fetch(apiUrl);
    const weatherData = await response.json();
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default weatherRouter;
