'use strict';

var reporter = require('cucumber-html-reporter');
console.log("this is the report file ....") 
var options = {
        theme: 'bootstrap',
        name: '测试demo',
        jsonFile: 'reporter/cucumber_reporter.json',
        output: 'reporter/cucumber_reporter.html',
        reportSuiteAsScenarios: true,
        storeScreenShots:true,
        launchReport: true
    };
 
reporter.generate(options);