const request = require('supertest');
const {expect} = require('chai');
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

describe('login',()=>{
    describe('POST /login',()=>{
        it('Deve retornar 200 com um token em string quando usar credencias válidas',async()=>{
            const bodyLogin = {...postLogin}

            const resposta = await request(process.env.Base_URL)
                .post('/login')
                .set('Content-Type','application/json') // configurações de cabeçalho
                .send(bodyLogin) 

            expect(resposta.status).to.equal(200);
            expect(resposta.body.token).to.be.a('string')  
        })

    })

})