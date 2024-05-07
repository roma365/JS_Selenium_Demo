const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')


class BasicAuthPage extends BasePage {
    check(){
        console.log("U use BasicAuthPage method")
    }
    submitBasicAuthorisation(name, pass){
        // http://username:password@test.com
        let url = 'https://the-internet.herokuapp.com/basic_auth';
        let parts = url.split('//');
        let newUrl = parts[0] + '//' + name+":"+pass+"@"+ parts[1];
        driver.get(newUrl);
        
    }
    dismissBasicAuthorisation(){
        driver.close()

    }
}
module.exports = new BasicAuthPage;