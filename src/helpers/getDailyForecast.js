import moment from 'moment';
import 'moment/locale/uk'
moment.locale('uk');

const getDailyForecast = daylyforecast => 

    daylyforecast.map(dayly => ({
    day: moment(dayly.dt*1000).format('dddd'),
    date: moment(dayly.dt*1000).format('D MMMM'),
    temperature : Math.round(dayly.temp.day),
    temperatureMin : Math.round(dayly.temp.min),
    temperatureMax : Math.round(dayly.temp.max),
    temperatureressenti : Math.round(dayly.feels_like.day),
    descriptions : dayly.weather[0].description,
    pressure : Math.round(dayly.pressure),
    uvi : dayly.uvi,
    icon : dayly.weather[0].icon,
    humidity: dayly.humidity,
}));

export default getDailyForecast
            