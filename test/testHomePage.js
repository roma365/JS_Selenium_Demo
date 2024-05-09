const navigateTo = require("../pageObjects/homePage");
const {Builder, Actions, WebElement, By, Key, textContent, until} = require('selenium-webdriver')
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
    it("Test Case 3 - Check ChallengingDomPage.", async () =>{
        //Check success navigation
        var challengingDomPage = await navigateTo.challengingDom_Page();
        var title = await driver.findElement(By.xpath("//h3[contains(.,'Challenging DOM')]")).getText();
        assert.equal(title,"Challenging DOM");
        //Check buttons click effect
        let answer1 = await challengingDomPage.getAnswer();
        let buttonText1 = await challengingDomPage.getButtonsText();
        await  challengingDomPage.clickOnButton("green");
        let answer2 = await challengingDomPage.getAnswer();
        let buttonText2 = await challengingDomPage.getButtonsText();
        assert.notEqual(answer1,answer2);
        console.log(answer1);
        console.log(answer2);
        assert.notEqual(buttonText1,buttonText2);
        //Check URL modify
        let editURL = await challengingDomPage.checkURLModify("edit");
        assert.equal(editURL, "https://the-internet.herokuapp.com/challenging_dom#edit");
        let deleteURL = await challengingDomPage.checkURLModify("delete");
        assert.equal(deleteURL, "https://the-internet.herokuapp.com/challenging_dom#delete");
    })
    it("Test Case 4 - Check Context Menu Page.", async ()=>{
        //Check success navigation
        var contextMenuPage = await navigateTo.contextMenu_Page();
        var title = await driver.findElement(By.xpath("//h3")).getText();
        assert.equal(title,"Context Menu");
        //Check right click effect
        let contextArea = await driver.findElement(By.xpath("//div[@id='hot-spot']"));
        contextMenuPage.performContextClick(contextArea);
        // let ff = await driver.findElement(By.xpath("//h3"));
        // await driver.actions({bridge:true}).contextClick(ff).sendKeys(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ENTER).perform();
    })
    it("Test Case 5 - Check ExitIntentPage ", async () => {
        //Check success navigation
        var exitIntentPage = await navigateTo.exitIntent_Page();
        var title = await driver.findElement(By.xpath("//h3")).getText();
        assert.equal(title, "Exit Intent");
        //Check move out viewport
        const body = await driver.findElement(By.tagName('body'));
        // Move the mouse to the top of the body element
        await driver.actions().move({ origin: body, x: 0, y: 0 }).perform();
        await console.log("move out")
        await driver.actions().move({ origin: body, x: 150, y: 150 }).perform();
        await console.log("move in")
        ////h3[.='This is a modal window']
        await driver.wait(until.elementLocated(By.xpath("//div[@style=\"display: block;\"]"))).then(async ()=>{
            await console.log("popup is displayed");
            await driver.findElement(By.xpath("//p[.='Close']")).click();
            await console.log("popup is closed");
        })


    })
    it.only("Test Case 6 - Check geolocationPage", async ()=>{
        //Check success navigation
        var geolocationPage = await navigateTo.geolocation_Page();
        var title = await driver.findElement(By.xpath("//h3")).getText();
        assert.equal(title, "Geolocation");
        //Check location generator
        await  driver.findElement(By.xpath("//button")).click();
        let latitude = await driver.findElement(By.xpath("//div[@id=\"lat-value\"")).getText();
        assert.equal( latitude,"49.*")
    })

//     it.only("", ()=>{
//         url = "https://the-internet.herokuapp.com/basic_auth";
//         fff = url.substring(7,8);
//         console.log(fff);
//     })
 })