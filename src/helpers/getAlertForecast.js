 import moment from 'moment';
import 'moment/locale/fr'
moment.locale('fr');

const getAlertForecast = alertForecast => {
    // console.log('hello: ' + alertForecast);
    if(alertForecast){
        return{
            sender_name : alertForecast.sender_name,
            event : alertForecast.event,
            start : moment(alertForecast.start*1000).format('HH:SS'),
            end : moment(alertForecast.end*1000).format('HH:SS'),
            description : alertForecast.description
        }
    }
}

export default getAlertForecast
