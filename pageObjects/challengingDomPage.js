const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')

class ChallengingDomPage extends BasePage{
    async checkURLModify(buttonName){
        switch (buttonName){
            case "edit":{
                await driver.findElement(By.xpath("//tr/td/a[@href=\"#edit\"][1]")).click();
                console.log(buttonName);
                console.log(await driver.getCurrentUrl());
                return await driver.getCurrentUrl();
            }break;
            case "delete":{
                await driver.findElement(By.xpath("//tr/td/a[@href=\"#delete\"][1]")).click();
                console.log(buttonName);
                console.log(await driver.getCurrentUrl());
                return await driver.getCurrentUrl();
            }break;
        }
    }
    async clickOnButton(color){
        switch (color) {
            case "blue": {
                await driver.findElement(By.css("a[class='button']")).click();
                console.log(color);
            }break;
            case "red": {
                await driver.findElement(By.css("a[class='button alert']")).click();
                console.log(color);
            }break;
            case "green": {
                await driver.findElement(By.css("a[class='button success']")).click();
                console.log(color);
            }break;
        }
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
    async getButtonsText(){
        let buttons = await driver.findElements(By.xpath("//a[contains(@class, 'button')]"));
        let buttonsText = [];
        for (let button of buttons) {
            buttonsText.push(await button.getText());
        }
        console.log(buttonsText[0] + " " + buttonsText[1] + " " + buttonsText[2]);
        return buttonsText;
    }
}
module.exports = new ChallengingDomPage();