const navigateTo = require("../pageObjects/homePage");

describe('Testing page navigation through the homepage', function(){
    this.beforeEach(function(){
        //What actions will performed before each 'it'(test)
    })
    
    this.afterEach(function(){
        //What actions will performed after each 'it'(test)
        //navigateTo.tearDown();
    })

    it('Test Case 1', () => {        
        navigateTo.homePage();
        var basicAuthPage = navigateTo.basicAuthPage();
        basicAuthPage.submitBasicAuthorisation("admin", "admin");
    })    

//     it.only("", ()=>{
//         url = "https://the-internet.herokuapp.com/basic_auth";
//         fff = url.substring(7,8);
//         console.log(fff);
//     })
 })