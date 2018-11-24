const chalk = require('chalk');
const Discord = require('discord.js');
const fs = require("fs");
const config = require('../config.json')
const purplecolor = chalk.keyword('purple');

module.exports = client => { // eslint-disable-line no-unused-vars
  console.log("salut");
  
  client.user.setActivity(`//help`, {type: "WATCHING"});
  

};
