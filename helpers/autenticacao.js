const request = require('supertest');
const postLogin = require('../fixtures/postLogin.json')

const obterToken = async(usuario, senha) => {
    const bodyLogin = {...postLogin}
    const respostaLogin = await request(process.env.Base_URL)
        .post('/login')
        .set('Content-Type','application/json') // configurações de cabeçalho
        .send(bodyLogin)  
    
    return respostaLogin.body.token    
}

module.exports ={obterToken}