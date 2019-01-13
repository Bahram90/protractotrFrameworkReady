varwb= newExcel.Workbook(); 
wb.xlsx.readFile("../TestData/Customer.xlsx").then(function(){});
varsh=wb.getWorksheet("Sheet1");
sh.getRow(i).getCell(1).value;
sh.getRow(i)
sh.getRow(3).getCell(2).value=32;
wb.xlsx.writeFile("./test.xlsx");

for(i=1; i<=sh.rowCount; i++) {
    console.log(sh.getRow(i).getCell(1).value);
    console.log(sh.getRow(i).getCell(2).value);
}