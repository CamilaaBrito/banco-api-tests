const request = require('supertest');

const obterToken = async(usuario, senha) => {
    const respostaLogin = await request(process.env.Base_URL)
        .post('/login')
        .set('Content-Type','application/json') // configurações de cabeçalho
        .send({
            'username':usuario,
            'senha':senha

        })  
    
    return respostaLogin.body.token    
}

module.exports ={obterToken}