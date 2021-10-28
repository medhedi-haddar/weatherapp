
import moment from 'moment';
import 'moment/locale/fr'
moment.locale('fr');

const getDetailCurrentForecast = detailCurrentForecast => {

    const sunrise           = moment(detailCurrentForecast.sunrise*1000).format('HH:SS'); // 00:00
    const sunset            = moment(detailCurrentForecast.sunset*1000).format('HH:SS'); // 00:00
    const moonrise          = moment(detailCurrentForecast.moonrise*1000).format('HH:SS'); // 00:00
    const moonset           = moment(detailCurrentForecast.moonset*1000).format('HH:SS'); // 00:00
    const moon_phase        = detailCurrentForecast.moon_phase; // 0 <-> 1

    const pressure          = Math.round(detailCurrentForecast.pressure); // hPa
    const humidity          = detailCurrentForecast.humidity; // %
    const wind_speed        = Math.round(detailCurrentForecast.wind_speed * 3.6); //km/h

    let wind_gust = 0;
    if(detailCurrentForecast.wind_gust){
        wind_gust = Math.round(detailCurrentForecast.wind_gust * 3.6);
    }
    const wind_deg          = detailCurrentForecast.wind_deg; // degree°
    const clouds            = detailCurrentForecast.clouds; // %

    const temp_night        = Math.round(detailCurrentForecast.temp.night); // degree°
    const temp_eve          = Math.round(detailCurrentForecast.temp.eve); // degree°
    const temp_morn         = Math.round(detailCurrentForecast.temp.morn); // degree°
    // Ressenti
    const feels_like_day    = Math.round(detailCurrentForecast.feels_like.day); // degree°
    const feels_like_night  = Math.round(detailCurrentForecast.feels_like.night); // degree°
    const feels_like_eve    = Math.round(detailCurrentForecast.feels_like.eve); // degree°
    const feels_like_morn   = Math.round(detailCurrentForecast.feels_like.morn); // degree°
    const uvi               = detailCurrentForecast.uvi; // degree°
    const pop               = Math.round(detailCurrentForecast.pop * 100);
    
    let rain = 0;
    if(detailCurrentForecast.rain){
        rain = detailCurrentForecast.rain ; 
    }
    let snow = 0;
    if(detailCurrentForecast.snow){
        snow = detailCurrentForecast.snow ; 
    }

    return{ 
        sunrise :           sunrise,
        sunset :            sunset,
        moonrise :          moonrise,
        moonset :           moonset,
        moon_phase :        moon_phase,
        pressure :          pressure,
        humidity :          humidity,
        wind_speed :        wind_speed,
        wind_deg :          wind_deg,
        wind_gust :         wind_gust,
        clouds :            clouds,
        temp_night :        temp_night,
        temp_eve :          temp_eve,
        temp_morn :         temp_morn,
        feels_like_day :    feels_like_day,
        feels_like_night :  feels_like_night,
        feels_like_eve :    feels_like_eve,
        feels_like_morn :   feels_like_morn,
        uvi :               uvi,
        rain :              rain,
        pop :               pop,
        snow :              snow,
        
    }
}
export default getDetailCurrentForecast
