var home = require("../Pages/home.page.js");
var base = require("../Utilities/Base.js");
//Database connection
var pgp = require('pg-promise')(/*options*/);
var connectionString = require("../TestData/dbConnection.js");
var queries = require("../TestData/query.js")


describe('Login- Database with pom', () => {
    
    var db = pgp(connectionString);
    var arr = []; 
    var username = '';
    var pass= ''; 


    it('Test-4 connection String and from queries  ', () => {
        
        db.any(queries.q2)
        .then(function(result){
          console.log(result)
           username = result[10].email;
           pass = result[10].firstname.toLowerCase().concat(result[10].lastname.toLowerCase());
        }).then(function(){
            base.navigateToHome();
            home.email.sendKeys(username);
            home.password.sendKeys(pass);
            home.signinButton.click();
            browser.sleep(2000);
            expect(home.title.getText()).toEqual("VA");
            browser.sleep(2000);

        })
    });

});