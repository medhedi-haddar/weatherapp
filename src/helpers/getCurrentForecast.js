import moment from 'moment';
import 'moment/locale/fr'
moment.locale('fr');

const getCurrentForecast = (data) => ({
    weekday: moment(data.dt*1000).format('dddd'),
    date: moment(data.dt*1000).format('D MMMM YYYY'),
    location: data.name,
    country : data.sys.country,
    temperature: Math.round(data.main.temp),
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    weatherDescription: data.weather[0].description,

});

export default getCurrentForecast;

