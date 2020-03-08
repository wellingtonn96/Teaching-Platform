const { DataTypes, Model } = require('sequelize')

class Professor extends Model {
    static init(sequelize) {
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            celular: DataTypes.STRING,
            dtExpiracao: DataTypes.DATE,
            apelido: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Professor