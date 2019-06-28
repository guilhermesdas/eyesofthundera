var mongoose = require('mongoose');
//var links_schema = require('./links_schema.js');
//var keywords_schema = require('./keywords_schema.js')

var RepositorySchema = new mongoose.Schema({

    links_id : {
        type: Number,
        required: true,
        unique: true
    },
    neighborhood_id: {
        type: Number,
        required: true
    },
    foundedKeywords_id: {
        type: [Number],
        required: true
    }
});

var Repository = mongoose.model('Repository', RepositorySchema);

module.exports = Repository;