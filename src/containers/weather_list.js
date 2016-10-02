import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps';


class WeatherList extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return(
      <tr key = {name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temp} color="orange" units="K"/>
        </td>
        <td>
          <Chart data={pressure} color="red" units="hPa"/>
        </td>
        <td>
          <Chart data={humidity} color="blue" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Preasure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}){
  return {weather};  //same as {weather:weather}
}
export default connect (mapStateToProps)(WeatherList);
