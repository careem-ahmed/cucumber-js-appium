'use strict';

var expect = require('chai').expect;

module.exports = function () {
    this.World = require('../support/world.js').World;

    this.When(/^I search Google for "([^"]*)"$/, function (searchQuery) {
        this.driver.get('http://www.google.com/');
        this.driver.findElement({ name: 'q' })
            .sendKeys(searchQuery);
        return this.driver.findElement({ name: 'q' })
            .sendKeys(this.webdriver.Key.ENTER);
    });

    this.Then(/^I should see some results$/, function () {
        this.waitFor('#resultStats');
        return this.driver.findElements({ css: 'resultStats' })
            .then(function (elements) {
                expect(elements.length).to.not.equal(0);
            });
    });

};
