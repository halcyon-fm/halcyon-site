/*
 *  filename: services/strapi.js
 *  description: -
 **/

/** System imports **/
//-

/** External imports **/
const axios = require('axios')

/** Project imports **/
//-

class StrapiService {
    static BASE_URL = 'https://secret-dusk-99089.herokuapp.com/api/';

    static async fetch(endpoint) {
        const token = process.env.STRAPI_API_TOKEN;
        if (!token) {
            throw Error(`Could not get Strapi API token from env, got ${token}`);
        }
        const url = `${this.BASE_URL}${endpoint}`;
        return await axios(url, {
            headers: {
                'Authorization': `bearer ${token}`,
            }
        });
    }
}

module.exports = StrapiService;
