
const http =  require('http');

const API_KEY = 'ee7870053a7b67d78850ed4a370b792e';
const WEATHER_SERVICE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const getCityWeather = (cityName)=> 
{
    let url = `${WEATHER_SERVICE_URL}?q=${cityName}&APPID=${API_KEY}&units=metric`;

    return new Promise((resolve, reject)=> {

        http.get(url, (res)=> {

            let body = '';

            res.on('data', (chunk)=> {
                body += chunk;
            });

            res.on('end', ()=> {
                let weather = JSON.parse(body);
                let { main: { pressure, temp },  } = weather;

                resolve({pressure, temp});
            });

            res.on('error', (error)=> {
                reject(error);
            })
            
        });
    });
}

module.exports = { getCityWeather };