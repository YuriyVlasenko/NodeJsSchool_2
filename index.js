const server = require('http').createServer();
const forecastManager = require('./forecastManager');

const port = 3000;

server.on('request', (req, res)=> {
    
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })

    const cityName = 'Kharkiv';
    forecastManager.getCityWeather(cityName)
        .then((cityWeather)=>{
            res.end(`${cityName} temp: ${cityWeather.temp}, pressure: ${cityWeather.pressure}`);
        })
        .catch(()=> {
            res.end('some error happend');
        });
});

server.listen(port, ()=>{
    console.log(`server started on ${port}`)
})