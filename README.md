#  Banco API Tests

##  Objetivo
Este projeto tem como objetivo realizar testes automatizados em uma API REST de banco, contribuindo para que os endpoints estejam funcionando corretamente conforme o esperado.


A API testada está disponível em:  
https://github.com/juliodelimas/banco-api

---

## Stack Utilizada
- JavaScript (Node.js)
- Mocha (Framework de testes)
- Chai (Assertions)
- Supertest (Testes HTTP)
- Dotenv (Variáveis de ambiente)
- Mochaawesome (Relatórios HTML)

---

## Estrutura de Diretórios

 ```
banco-api-tests/
│
├── test/                         # Arquivos de testes
│   ├── login.test.js             # Testes de autenticação (login)
│   ├── transferencia.test.js     # Testes de transferência bancária
│
├── mochawesome-report/           # Relatórios gerados
├── node_modules/                 # Dependências do projeto
├── .env                          # Variáveis de ambiente (não versionado)
├── .gitignore                    # Arquivos ignorados pelo Git
├── package.json                  # Dependências e scripts
└── README.md                     # Documentação do projeto
```
---

## Configuração do .env

Antes de executar os testes, é necessário criar um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

BASE_URL=http://localhost:3000

 **Importante:**  
A URL deve apontar para onde a API está rodando.

---

## Como Executar os Testes

1. Instale as dependências:
npm install

2. Execute os testes:
npm test

---

## Geração de Relatórios

O projeto utiliza o **mochaawesome** para gerar relatórios em HTML.

Após executar os testes, o relatório será gerado automaticamente na pasta:

/mochawesome-report

Abra o arquivo `.html` dentro dessa pasta para visualizar os resultados.

---

## Documentação das Dependências

- Mocha: https://mochajs.org/  
- Chai: https://www.chaijs.com/  
- Supertest: https://github.com/ladjs/supertest  
- Dotenv: https://github.com/motdotla/dotenv  
- Mochaawesome: https://github.com/adamgruber/mochawesome  

---

##  Observações
- Certifique-se de que a API esteja em execução antes de rodar os testes.
- O arquivo `.env` não deve ser versionado.
- Os relatórios são gerados automaticamente após a execução dos testes.

---
