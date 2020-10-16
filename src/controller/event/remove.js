const path = require('path');
const Sequelize = require('sequelize');
const sequelize = require('../../model/index');
// const Event = sequelize.import('./../../model/event');
const Event = require(path.join(__dirname, './../../model/event'))(sequelize, Sequelize.DataTypes);

module.exports = (req,res) => {

    Event
    .destroy({
        where: {
          id: req.params.id
        }
      })
    .then(() => res.redirect('/events'));
}