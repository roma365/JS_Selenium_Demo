const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')
var basicAuthPage = require('./basicAuthPage')
var addRemoveElementsPage = require('./addRemoveElementsPage')
var challengingDomPage = require('./challengingDomPage')
var contextMenuPage = require('./contextMenuPage')
var exitIntentPage = require('./exitIntentPage')
var geolocationPage = require('./geolocationPage')
var horizontalSliderPage = require('./horizontalSliderPage')
var javaScriptAlertsPage = require('./javaScriptAlertsPage')


var webdriver = require('selenium-webdriver')

class HomePage extends BasePage{
    home_Page(){
        var baseurl = 'http://the-internet.herokuapp.com';
        this.go_to_url(baseurl);
        //BasePage.go_to_url(baseurl); //Use static* for go_to_url() method in BasePage class
    }
    async basicAuth_Page(){
        await driver.findElement(By.xpath("//a[@href='/basic_auth']")).click();
        return basicAuthPage;
    }
    async addRemoveElements_Page() {
        await driver.findElement(By.xpath("//a[@href=\"/add_remove_elements/\"]")).click();
        return addRemoveElementsPage;
    }
    async challengingDom_Page() {
        await driver.findElement(By.xpath("//a[@href=\"/challenging_dom\"]")).click();
        return challengingDomPage;
    }
}
module.exports = new HomePage();