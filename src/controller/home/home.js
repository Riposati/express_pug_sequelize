// const path = require('path');
// const Sequelize = require('sequelize');

// const sequelize = require('./../../model/index');
// const Event = require(path.join(__dirname, './../../../models/event'))(sequelize, Sequelize.DataTypes);

module.exports = (req,res) => {
    return res.render('home/index', {
        title: 'Home',
        msg: 'welcome to events app'
    });
}