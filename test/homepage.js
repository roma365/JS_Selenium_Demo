const BasePage = require("../pageObjects/basePage");
const homepage = require("../pageObjects/homepage");

describe('This is test suit.', function(){
    this.beforeEach(function(){
        //What actions will performed before each 'it'(test)
    })
    
    this.afterEach(function(){
        //What actions will performed after each 'it'(test)

    })

    it('Test Case 1', () => {
        var baseurl = 'http://the-internet.herokuapp.com';
        homepage.go_to_url(baseurl);
        homepage.abtestingOpen(); 
    })

    
})