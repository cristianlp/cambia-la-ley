/**
* Tag.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'STRING',
      required: true,
      unique: true
    },
    slug: {
      type: 'STRING',
      unique: true
    },
    summary: {
      type: 'STRING',
      required: true
    },
    laws: {
      collection: 'law',
      via: 'tag'
    }
  },

  afterDestroy: function(destroyedRecords, cb) {
    // Emulate cascading delete (unsupported by Sails.js at the moment).
    // If a tag is destroyed, all of its laws must destroyed as well.
    Law.destroy({tag: _.pluck(destroyedRecords, 'id')}).exec(cb);
  },

};

