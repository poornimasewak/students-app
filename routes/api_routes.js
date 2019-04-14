var db = require("../models");
module.exports = function (app) {
    app.post("/api/addnewstudent", function (req, res) {
        db.Student.create(req.body).then(function (dbStudent) {
            // res.json(dbStudent);
            res.redirect("/studentslist");
        });
        // res.end()
    });

    app.get("/studentslist", function (req, res) {
        db.Student.findAll({}).then(function (data) {
            console.log(data);

            res.render("students", { students: data });
        })
    });

}