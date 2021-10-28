import {useState} from 'react'
import axios from 'axios';
import getCurrentForecast from './helpers/getCurrentForecast';
import getAlertForecast from './helpers/getAlertForecast';
import getHourlyForecast from './helpers/getHourlyForecast';
import getDailyForecast from './helpers/getDailyForecast';
import getDetailCurrentForecast from './helpers/getDetailCurrentForecast';

// new key = 3bf3d393c0417e9f14c803b86d1a8fd7
const API_KEY = "b96cf2201d3a30a9889082d993d5610e";
const BASE_URL = "https://api.openweathermap.org/data/2.5"



const useForecast = () => {

    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);
    
    const getCurrentLocationData = async (location) =>{
        try {
            const allData = await axios(`${BASE_URL}/weather?q=${location}&lang=fr&units=metric&appid=${API_KEY}`);
            
            const data = allData.data;
            return {data};
        } catch (error) {
            return; 
        }       
    }

    const getDetailLocationData = async (lat,lon) =>{
        try {
            const detailData = await axios(`${BASE_URL}/onecall?units=metric&lat=${lat}&lon=${lon}&lang=fr&exclude=minutely&appid=${API_KEY}`);

            const data = detailData;
        return {data};
        } catch (error) {
            return;
        }
    }

    const getLocationBase = async (location) => {
        try {
            const cityData = await getCurrentLocationData(location); 

            const current_data = cityData.data;
            const Location_lat = cityData.data.coord.lat;
            const Location_lon = cityData.data.coord.lon;
            try {
                const cityDetails= await getDetailLocationData(Location_lat,Location_lon);
                
                const dataObject = {current_data : current_data, cityDetails : cityDetails.data.data};
                return dataObject;
            } catch (error) {
                return;
            }
        } catch (error) {
            return; 
        }
    }

    const deployData = (data) =>{
        
        const currentForecast = getCurrentForecast(data.current_data);
        const hourlyForecast = getHourlyForecast(data.cityDetails.hourly);
        const daylyForecast = getDailyForecast(data.cityDetails.daily);

        let alertsForecast = {};
        if(data.cityDetails.alerts){
            const dataAlertForecast = getAlertForecast(data.cityDetails.alerts[0]);
            alertsForecast = dataAlertForecast;
        }
        data.cityDetails.daily[0].humidity = data.current_data.main.humidity;
        const detailCurrentForecast = getDetailCurrentForecast(data.cityDetails.daily[0]);

        setForecast({
            currentForecast,
            hourlyForecast,
            daylyForecast,
            alertsForecast,
            detailCurrentForecast
        });
        setLoading(false);
    }

    // on submit location recup DATA
    const submitRequest = async location =>{
        setLoading(true);
        setError(false);
        try {
            const response = await getLocationBase(location);
            deployData(response);
            localStorage.setItem('lastLocation', location);
            
        } catch (error) {
            setError(true);
            setLoading(false);
            return;
        }      
    }
    console.log(forecast);
      return {
        isError,
        isLoading,
        forecast,
        submitRequest
    }
}

export default useForecast
