var home = require("../Pages/home.page.js");
var base = require("../Utilities/Base.js");


//DataBase connection 
var pgp = require('pg-promise')(/*options*/);

//ready code in order to connect pgAdmin postgre 
describe('TName of the group', () => {

    var connectionString = {
        host: 'room-reservation-qa5.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
        port: 5432,
        database: 'room_reservation_qa5',
        user: 'qa_user',
        password: 'Cybertek11!'
    }
    var db = pgp(connectionString);
    var arr = [];
    var username = '';
    var pass = '';
    it('should Test Case-3 login the website with database', () => {


        db.any(`select firstname,lastname,email from users 
        where email='efewtrell8c@craigslist.org'`)
            .then(function (result) {
                console.log(result);
                username = result[0].email;
                pass = result[0].firstname.toLowerCase().concat(result[0].lastname.toLowerCase());
            }).then(function () {

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
