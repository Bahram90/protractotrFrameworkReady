//import
var home =require("../Pages/home.page.js");
var testData=require("../TestData/data1.json");

describe('POM and Test Data', () => {
    it('Test 2 - login website with POM and Test Data', () => {
        
        browser.get(testData.url);

        //email
        home.email.sendKeys(testData.email);
        
        //password
        home.password.sendKeys(testData.password);

        ////button click 
        home.signinButton.click();
        browser.sleep(2000);
        expect($(".title").getText()).toEqual("VA");
        browser.sleep(2000);
    });
});
