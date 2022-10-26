const axios = require('axios');
const { sequelize, Sequelize, User } = require('../../../models')

module.exports.getIncidents = (request, response, next) => {
    const weather_api_url = process.env.WEATHER_API_URL;
    let weather_result = {};

    const config = {
        method: 'get',
        url: weather_api_url,
        headers: { }
    };

    axios(config)
        .then(result => {
            console.log(JSON.stringify(result.data));
        })
        .catch(error => {
            console.error('Oops!! something happened %s ', error.message);
        });

    response.status(200).json({status: true, message: "Successfully retrieved", data: {}});
}

module.exports.postIncidents = (request, response, next) => {
    response.status(201).json({status: true, message: "Successfully created", data: {}});
}
