const Sequelize = require('sequelize');

// new Sequelize('mysql://user:password@localhost:3306/dbname'); // padrão sequelize
// const sequelize = new Sequelize('mysql://root:@localhost:3306/sequelize');

const sequelize = new Sequelize('sequelize', 'root', '',{
    host:'localhost',
    dialect: 'mysql',
    // pool:{
    //     max:
    //     min:
    //     acquire:
    //     idle:
    // }
});

sequelize
.authenticate()
.then(()=> console.log('ok'))
.catch(()=> console.log('error'))

// sequelize.sync();

module.exports = sequelize;