import React from 'react'
import PropTypes from 'prop-types';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DaylyForecast from '../DaylyForecast/DaylyForecast';
import AlertForecast from '../AlertForecast/AlertForecast';
import DetailCurrentForecast from '../DetailCurrentForecast/DetailCurrentForecast';


const Forecast = ({forecast}) => (
    <div className="container pt-5 pb-5">
        <CurrentForecast {...forecast.currentForecast}/>
        { Object.keys(forecast.alertsForecast).length > 0 &&  <AlertForecast {...forecast.alertsForecast}/> } 
        <div>
            <HourlyForecast hourlyforecast={forecast.hourlyForecast}/>
        </div>
        <div>
            <DaylyForecast daylyForecast={forecast.daylyForecast}/>
        </div>
    
        <div>
            <DetailCurrentForecast {...forecast.detailCurrentForecast} />
        </div>
    </div>

);

Forecast.propTypes = {
    forecast : PropTypes.shape({
        currentForecast : PropTypes.object,
        hourlyForecast: PropTypes.array,
        daylyForecast: PropTypes.array,
        alertsForecast : PropTypes.object,
        detailCurrentForecast : PropTypes.object,
    }),
}
export default Forecast
