

var Excel = require('exceljs');
var wb = new Excel.Workbook();
var sh;
var filePath = "../TestData/Customer.xlsx";
var sheetName = "data1";

describe('Name of the group', () => {

    var test1 = '';
    var test2 = '';
    it('should search from goodle using excel', () => {

        wb.xlsx.readFile(filePath).then(function () {
            sh = wb.getWorksheet(sheetName);
            test1 = sh.getRow(4).getCell("A").value;
            test2 = sh.getRow(4).getCell("B").value;

            browser.ignoreSynchronization = true
            browser.get("http://google.com/");

            element(by.name('q')).sendKeys(test2).submit();
            element(by.id('resultStats')).getText().then(function(result){
                     console.log(result);
                     var text='';
                     text=result.split(" ");
                     
                     //to write text or anything in the excel 
            
             sh.getRow(4).getCell("E").value=text[1]// Writing  into excel file●
             wb.xlsx.writeFile("../TestData/abc.xlsx"); 
            })
           

            
            browser.sleep(3000);
        });
    });
});