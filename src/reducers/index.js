import { combineReducers } from 'redux';
import WeatherRecuder from './reducer_weather';

const rootReducer = combineReducers({
  weather:WeatherRecuder
});

export default rootReducer;
