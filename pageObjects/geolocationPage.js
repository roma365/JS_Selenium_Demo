const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')

class GeolocationPage extends BasePage{

}
module.exports = new GeolocationPage();