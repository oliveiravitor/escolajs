var Sequelize = require('sequelize');

module.exports = function(sequelize) {
    return sequelize.define('Curso', {
        curso: {
            type: Sequelize.STRING(100),
            allowNull: false,
            unique: true,
            validate:{
                is:{
                    args: /^[A-Za-zê]{3,100}$/,
                    msg: 'O Curso deve possuir entre 3 e 100 caracteres.'
                }
            }
        },
        sigla: {
            type: Sequelize.STRING(20),
            allowNull: false,
            unique: true,
            validate:{
                is:{
                    args: /^[A-Z]{2,20}$/,
                    msg: 'A Sigla do Curso deve possuir entre 2 e 20 letras.'
                }
            }
        }
    }, {
        freezeTableName: true
    });
};
