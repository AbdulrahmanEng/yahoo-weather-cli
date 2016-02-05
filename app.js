#!/usr/bin/env node

var YQL = require('yql');
var rl = require('readline');

var prompts = rl.createInterface(process.stdin, process.stdout);
console.log('');
prompts.question("Enter your postcode: ", function(input){
console.log('');

var postcode = input;

var query = new YQL('select * from weather.forecast where (location = '+postcode+')');

query.exec(function(err, data){
	var location = data.query.results.channel.location;
	var condition = data.query.results.channel.item.condition;
	console.log('The current weather in ' + location.city + ', ' + location.region + ' is ' + condition.temp + ' °F.');
});

});
