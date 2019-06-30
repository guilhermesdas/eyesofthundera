var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var Repository = require('../schemas/repository_schema.js');
var Keywords = require('../schemas/keywords_schema')

// /repository/ will return all repository
router.get("/", (req, res) => {
	console.log("listing all repository.");	
	// Repository.find({}, (err,repository) => {
	// 	if (err) {
	// 		res.send(err);
	// 	} else {
	// 		res.send(repository);
	// 	}		
	// }).populate("foundedKeywords_ids.foundedKeywords_id")
	Repository.find()
	.populate("neighborhood")
	.populate("link")
	.populate("keywords")
	.then(repo => res.json(repo));
});

// /repository/add will add a repository
router.post("/add", urlencodedParser, (req, res) => {

	//var json = Object.assign({}, REPOSITORY_JSONIN);
	var json = req.body;
	console.log(JSON.stringify(json));
	var v = Repository.create(json)
	if (v == null || v == undefined)
		return res.send({ status: false });
	else{
		console.log("new repository added:\n", json);
		return res.send({status: true})
	}

});

module.exports = router;