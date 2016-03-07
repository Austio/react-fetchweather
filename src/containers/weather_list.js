import React from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends React.Component {
  renderWeather(cityData) {
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);
      
      return(  
        <tr key={ name }>
          <td>{ name} </td>
          <td><Sparklines data={ temps      }><SparklinesLine color="blue" /></Sparklines> </td>
          <td><Sparklines data={ pressures  }><SparklinesLine color="red" /></Sparklines> </td>
          <td><Sparklines data={ humidities }><SparklinesLine color="green" /></Sparklines> </td>
        </tr>  
      );
  }    
    
  render() {
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                { this.props.weather.map(this.renderWeather) }
            </tbody>
        </table>    
    );
  }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);