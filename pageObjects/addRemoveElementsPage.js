const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')

class AddRemoveElementsPage extends BasePage{
    async addNumberOfElements(num){
        for(var i=0; i<num; i++ ){
            await driver.findElement(By.css("button[onclick=\"addElement()\"]")).click();
        }
    }
    async deleteNumberOfElements(num){
        for(var i=0; i<num; i++ ){
            await driver.findElement(By.css("button[onclick=\"deleteElement()\"]")).click();
        }
    }
}
module.exports = new AddRemoveElementsPage();