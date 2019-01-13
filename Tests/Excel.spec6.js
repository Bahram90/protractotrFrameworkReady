var home = require("../Pages/home.page.js");
var base = require("../Utilities/Base.js");

var Excel = require('exceljs');
var wb = new Excel.Workbook();
var sh;
var filePath = "../TestData/Customer.xlsx";
var sheetName = "data1";

describe('Testing with excel ', () => {
    
    var username = '';
    var password = ''; 

    it('Test -6 should test with excell information', () => {
        
        wb.xlsx.readFile(filePath).then(function(){
            sh= wb.getWorksheet(sheetName);
           username=  sh.getRow(3).getCell(3).value;
           password = sh.getRow(3).getCell(4).value;

           base.navigateToHome();
           home.email.sendKeys(username);
           home.password.sendKeys(password);
           home.signinButton.click();
           browser.sleep(3000)
           expect(home.title.getText()).toEqual("IL");
           browser.sleep(3000)
           
           


        })

    
    });


});