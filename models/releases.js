/*
 *  filename: models/releases.js
 *  description: -
 **/

/** System imports **/
//-

/** External imports **/
//-

/** Project imports **/
const StrapiService = require('../services/strapi.js')

class Release {
    constructor({ name, fan_link, cover }) {
        this.name = name;
        this.fan_link = fan_link;
        this.cover = cover.data ? cover.data[0].attributes.url : '';
    }
}

class Releases {
    static async getAll() {
        try {
            const response = await StrapiService.fetch('all-releases/4?populate[0]=release&populate[1]=release.cover');
            const data = response.data.data.attributes;
            return await data.release.map(release => new Release(release))
        } catch (error) {
            console.log(error);
            return {};
        }
    }
}

module.exports = Releases;
