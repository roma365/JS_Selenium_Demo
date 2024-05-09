const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')

class ContextMenuPage extends BasePage{
    async performContextClick(element){
        await await driver.actions({bridge:true}).contextClick(element).perform();
        await driver.switchTo().alert().accept();
    }

}
module.exports = new ContextMenuPage();