const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('../pageObjects/basePage')
var webdriver = require('selenium-webdriver')

class HomePage extends BasePage{
    abtestingOpen(){
        driver.findElement(By.css("a[href='/abtest']")).click();
    }
}
module.exports = new HomePage();