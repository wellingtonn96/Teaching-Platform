const Sequelize = require('sequelize');
const dbConfig = require('./config/database')

const Aluno = require('./models/Aluno')
const Professor = require('./models/Professor')
const Coordenador = require('./models/Coordenador')

const connection = new Sequelize(dbConfig)

Aluno.init(connection)
Professor.init(connection)
Coordenador.init(connection)

const professor = {
    login:'takai545',
    senha: '1dfsf6d',
    nome: 'Takai',
    email: Math.random().toString().concat('@gmail.com'),
    celular: Math.random().toString(),
    apelido: 'takaizito'
}

const aluno = {
    login: 'welto',
    senha: 'dfsdf12',
    nome: 'wellinton',
    email: Math.random().toString().concat('@gmail.com'),
    celular:  Math.random().toString(),
    ra: 1546854,
    foto: 'https://localhost:3000/aluno_photo'
}

const coordenador = {
    login: 'vanderson545',
    senha: '4dsfds54',
    nome: 'Vanderson',
    email: Math.random().toString().concat('@gmail.com'),
    celular:  Math.random().toString(),
}

async function main() {
    const coordenadorResult = await Coordenador.create(coordenador)
    console.log(coordenadorResult.dataValues)

    const alunoResult = await Aluno.create(aluno)
    console.log(alunoResult.dataValues)

    const professorResult = await Professor.create(professor)
    console.log(professorResult.dataValues)
}

main()

