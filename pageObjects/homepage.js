const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')
var basicAuthPage = require('./basicAuthPage')

var webdriver = require('selenium-webdriver')

class HomePage extends BasePage{
    homePage(){
        var baseurl = 'http://the-internet.herokuapp.com';
        this.go_to_url(baseurl);
        //BasePage.go_to_url(baseurl); //Use static* for go_to_url() method in BasePage class
    }
    basicAuthPage(){
        driver.findElement(By.xpath("//a[@href='/basic_auth']")).click();
        return basicAuthPage;
    }
}
module.exports = new HomePage();