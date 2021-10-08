### npm run build

### npm start

### Gerencia as requisições, rotas e URLs, entre outra funcionalidades
npm install express

### Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
npm install -g nodemon

### Instalar o banco de dados MongoDB
npm install --save mongodb 

### Instalar o Mongoose - Mongoose traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados pela aplicação.
npm install --save mongoose

### Rodar o nodemon
  "main": "server.js",
  "scripts": {
    "dev": "webpack serve",
    "start": "nodemon",
    "build": "webpack --mode production"
  },

### Rodar no Heroku
    "main": "index.js",
  "scripts": {
    "dev": "webpack serve",
    "start": "node server.js",
    "build": "webpack --mode production"
  },