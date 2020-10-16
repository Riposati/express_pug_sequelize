const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('./../../model/index');
// const Event = sequelize.import('./../../model/event');
const Event = require(path.join(__dirname, './../../model/event'))(sequelize, Sequelize.DataTypes);

module.exports = (req,res) => {
    
    Event
        .findByPk(req.params.id).then((event) => {

            return res.render('event/show', {
                title: 'Event - ' + event.id,
                msg: 'Show - ' + event.name,
                event: event
            });
        });
    
}