import moment from 'moment';
import 'moment/locale/uk'
moment.locale('uk');

const getHourlyForecast = hourlyForecast =>

    hourlyForecast.map(hourly => ({
        date : moment(hourly.dt*1000).format('HH:SS'),
        temperature : Math.round(hourly.temp),
        descriptions : hourly.weather[0].description,
        icon : hourly.weather[0].icon,
    }));


export default getHourlyForecast
