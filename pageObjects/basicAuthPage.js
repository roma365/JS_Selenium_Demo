const {Builder, By, Key, until} = require('selenium-webdriver')
var BasePage = require('./basePage')
class BasicAuthPage extends BasePage {
    check(){
        console.log("U use BasicAuthPage method")
    }
    async submit_Basic_Authorisation(name, pass){
        // http://username:password@test.com
        console.log("Start Submit Auth")
        let url = 'https://the-internet.herokuapp.com/basic_auth';
        let parts = url.split('//');
        let newUrl = parts[0] + '//' + name+":"+pass+"@"+ parts[1];
        console.log(newUrl)
        await driver.get(newUrl);
    }
}
module.exports = new BasicAuthPage;