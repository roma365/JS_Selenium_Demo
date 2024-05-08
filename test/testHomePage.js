const navigateTo = require("../pageObjects/homePage");
const {Builder, By, Key, textContent, until} = require('selenium-webdriver')
const assert = require("assert");
const {List} = require("mocha/lib/reporters");

describe('Testing page navigation through the homepage', function(){
    this.beforeEach(async function () {
        await navigateTo.home_Page();
    })
    this.afterEach(async function () {
    })
    this.afterAll( async function(){
        // await navigateTo.tearDown();
    })
    it('Test Case 1 - Check succesful Basic Authorisation on the basicAuthPage.', async () => {
        var basicAuthPage =  await navigateTo.basicAuth_Page();
        await basicAuthPage.submit_Basic_Authorisation("admin", "admin");
        let msg = await driver.findElement(By.css("p")).getText();
        assert.equal(msg,"Congratulations! You must have the proper credentials.");
    })
    it("Test Case 2 - Check addRemoveElementsPage.", async () =>{
        var addRemoveElementsPage = await navigateTo.addRemoveElements_Page();
        var numAdd = 3;
        await addRemoveElementsPage.addNumberOfElements(numAdd);
        var elements = await driver.findElements(By.css("button[onclick=\"deleteElement()\"]"));
        assert.equal(elements.length,numAdd);
        numDelete = 2;
        await addRemoveElementsPage.deleteNumberOfElements(numDelete);
        var elements = await driver.findElements(By.css("button[onclick=\"deleteElement()\"]"));
        assert.equal(elements.length,numAdd-numDelete);
    })
    it.only("Test Case 3 - Check ChallengingDomPage.", async () =>{
        var challengingDomPage = await navigateTo.challengingDom_Page();
        var title = await driver.findElement(By.xpath("//h3[contains(.,'Challenging DOM')]")).getText()
        assert.equal(title,"Challenging DOM")
        let answer1 = await challengingDomPage.getAnswer();
        await  challengingDomPage.clickOnBlueButton();
        let answer2 = await challengingDomPage.getAnswer();
        assert.notEqual(answer1,answer2);
        console.log(answer1)
        console.log(answer2)



    })


//     it.only("", ()=>{
//         url = "https://the-internet.herokuapp.com/basic_auth";
//         fff = url.substring(7,8);
//         console.log(fff);
//     })
 })