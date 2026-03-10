import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setWeather } from './store';

function App() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(setLoading());
    fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,wind_speed_10m')
      .then(res => res.json())
      .then(data => dispatch(setWeather(data)));
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Weather in New York</h1>
      <p>Temperature: {data.current.temperature_2m}°C</p>
      <p>Wind Speed: {data.current.wind_speed_10m} km/h</p>
    </div>
  );
}

export default App;
