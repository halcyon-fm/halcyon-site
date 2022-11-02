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
    constructor({ title, fan_link, cover }) {
        this.name = title;
        this.fan_link = fan_link;
        this.cover = cover.data?.attributes?.url || '';
    }
}

class Releases {
    static async getAll() {
        try {
            const response = await StrapiService.fetch('discographies/1?populate[0]=releases&populate[1]=releases.cover');
            const releases = response.data?.data?.attributes?.releases || [];
            return await releases.map(release => new Release(release))
        } catch (error) {
            console.log(error);
            return {};
        }
    }
}

module.exports = Releases;
