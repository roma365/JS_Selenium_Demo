var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        global.driver = driver;
    }
    go_to_url(thisURL){  
        driver.get(thisURL);
    } 
    tearDown(){ 
       
        setTimeout(()=>{
            driver.quit();
        }, 3000);       
    }  

}
module.exports = BasePage;