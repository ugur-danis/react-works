import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WeatherForecastProvider } from './context/WeatherForecastContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WeatherForecastProvider>
      <App />
    </WeatherForecastProvider>
  </React.StrictMode>
);