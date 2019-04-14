module.exports = function (app) {
    // app.get("/", function (req, res) {
    //     res.render("home");
    // });

    // app.get("/students", function (req, res) {
    //     res.render("students");
    // });

    // app.get("/teachers", function (req, res) {
    //     res.render("teachers");
    // });

    app.get("/addstudent", function (req, res) {
        res.render("addStudent");
    });





};
