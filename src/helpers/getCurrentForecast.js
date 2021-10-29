import moment from 'moment';
import 'moment/locale/uk'
moment.locale('uk');

const getCurrentForecast = (data) => ({
    weekday: moment(data.dt*1000).format('dddd'),
    date: moment(data.dt*1000).format('D MMMM YYYY'),
    location: data.name,
    country : data.sys.country,
    temperature: Math.round(data.main.temp),
    temperature_max: Math.round(data.main.temp_max),
    temperature_min: Math.round(data.main.temp_min),
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    weatherDescription: data.weather[0].description,

});

export default getCurrentForecast;

