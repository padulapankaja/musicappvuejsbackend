const User = require('../Model/user.modal');

exports.test = function (req, res) {
    res.send();
}



exports.getallusers = function (req, res) {

    User.find(function (err, musicusers) {
        if (err) {
            console.log(err);

        } else {
            res.json(musicusers);
            // console.log(musicusers);

        }
    });
};



exports.getuserfromid = function (req, res) {

    let id = req.params.id
    User.findById(id, function (err, musicusers) {
        if (err) {
            console.log(err);

        } else {
            res.json(musicusers);
        }
    });
};



exports.registerUser = function (req, res) {
    var fname = req.body.fname;
    var lname = req.body.lname;
    var email = req.body.email;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var password = req.body.password;



    if (fname == "" || lname == "" || email == "" || dob == "" || gender == "" || password == "" || fname == null || lname == null || email == null || dob == null || gender == null || password == null) {

        console.log("Fname Empty");
        res.send("Filed are empty");
        res.send(fname,lname, email, dob, gender, password  );

    } else {


        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(dob);
        console.log(gender);
        console.log(password);




        let user = new User(req.body);



        console.log(user);

        user.save().then(
            user => {
                res.status(200).json({ 'user': 'user added sucess' })

            }
        ).catch(err => {
            res.status(400).send(err);

        })


    }



};



