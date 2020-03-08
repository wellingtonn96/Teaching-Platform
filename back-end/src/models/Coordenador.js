const { DataTypes, Model } = require('sequelize')

class Coordenador extends Model {
    static init(sequelize) {
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            celular: DataTypes.STRING,
            dtExpiracao: DataTypes.DATE
        }, {
            sequelize
        })
    }
}

module.exports = Coordenador