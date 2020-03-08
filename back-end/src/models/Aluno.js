const { DataTypes, Model } = require('sequelize')

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            email: DataTypes.STRING,
            celular: DataTypes.STRING,
            dtExpiracao: DataTypes.DATE,
            ra: DataTypes.INTEGER,
            foto: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Aluno