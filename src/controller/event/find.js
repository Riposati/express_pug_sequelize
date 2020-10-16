const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('./../../model/index');
// const Event = sequelize.import('./../../model/event');
const Event = require(path.join(__dirname, './../../model/event'))(sequelize, Sequelize.DataTypes);

module.exports = (req,res) => {

    Event
        .findAll().then((events) => {

            return res.render('event/index', {

                title: 'List all events',
                msg: 'All events',
                events: events
            });
        });
}