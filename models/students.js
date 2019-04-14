module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        course: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.INTEGER
        }
    });
    return Student;
};
