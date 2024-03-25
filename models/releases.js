/*
 *  filename: models/releases.js
 *  description: -
 **/

/** System imports **/
//-

/** External imports **/
const qs = require('qs');


/** Project imports **/
const StrapiService = require('../services/strapi.js')

class Release {
   constructor({ name, title, release_date, fanlink, cover_art }) {
      this.name = name;
      this.title = title;
      this.release_date = release_date;
      this.fanlink = fanlink;
      this.cover_art = cover_art;
   }
}

class Releases {
   static async getAll() {
      try {
         const querystrings = {};
         const fields = [
            'singles', 
            'singles.cover_art',
            'eps',
            'eps.cover_art',
            'albums',
            'albums.cover_art',
            'compilations',
            'compilations.cover_art',
         ]
         fields.forEach((e, i) => querystrings[`populate[${i}]`] = e);

         const response = await StrapiService.fetch('discography?' + qs.stringify(querystrings));
         const attributes = response.data?.data?.attributes || {}; 
         const releases = [].concat.apply([], [attributes?.singles?.data, attributes.eps.data, attributes.albums.data, attributes.compilations.data]); 
         return releases.map(release => new Release(release.attributes)).sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      } catch (error) {
         console.log(error);
         return {};
      }
   }
}

module.exports = Releases;
