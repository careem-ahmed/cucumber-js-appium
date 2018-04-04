'use strict';

var driver = require('./world.js').getDriver();
var fs = require('fs');
var path = require('path');
var sanitize = require("sanitize-filename");

var myHooks = function () {
  this.Before(function(scenario){
    // this.driver.manage().window().maximize();
  });
  
  this.After(function(scenario) {
    if(scenario.isFailed()) {
      
      this.driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"");
        var decodedImage = new Buffer(data, 'base64').toString('binary');
        fs.writeFile(path.join('screenshots', sanitize(scenario.getName() + ".png").replace(/ /g,"_")), base64Data, 'base64', function(err) {
            if(err) console.log(err);
        });
        scenario.attach(decodedImage,'image/png');
      });
    }
    return this.driver.manage().deleteAllCookies();
  });

  this.registerHandler('AfterFeatures', function (event) {
    return driver.quit();
  });

};

module.exports = myHooks;
