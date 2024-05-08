const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')

class ChallengingDomPage extends BasePage{
    async clickOnBlueButton(num){
        await driver.findElement(By.css("a[class='button']")).click();
    }
    async getAnswer(){
        var scriptElement = await driver.findElement(By.xpath("//script[contains(text(), 'strokeText')]"));
        var scriptText = await scriptElement.getAttribute('innerHTML');
        let step1 = scriptText.split("Answer:")
        let step2 = step1[1].split("'")
        let step3=step2[0];
        console.log("Answer : " + step3);
        return step3;
    }
}
module.exports = new ChallengingDomPage();