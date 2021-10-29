import React from 'react'
import PropTypes from 'prop-types';
import CurrentForecast from '../CurrentForecast/CurrentForecast';
import HourlyForecast from '../HourlyForecast/HourlyForecast';
import DaylyForecast from '../DaylyForecast/DaylyForecast';
import AlertForecast from '../AlertForecast/AlertForecast';
import DetailCurrentForecast from '../DetailCurrentForecast/DetailCurrentForecast';


const Forecast = ({forecast}) => (
    <div>
        <CurrentForecast {...forecast.currentForecast}/>
        { Object.keys(forecast.alertsForecast).length > 0 &&  <AlertForecast {...forecast.alertsForecast}/> } 
        <div className="mb-5">
            <HourlyForecast hourlyforecast={forecast.hourlyForecast}/>
        </div>
        <div className="mb-5">
            <DaylyForecast daylyForecast={forecast.daylyForecast}/>
        </div>
    
        <div className="mb-5">
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
