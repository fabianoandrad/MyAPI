const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

require ('./models/list')
const List = mongoose.model('List')

const app = express();

//mongodb+srv://affatecnologia:user123456@cluster0.cqjgq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb://localhost:27017/datebase
mongoose
  .connect("mongodb://localhost:27017/myapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
  })
  .catch((error) => {
    console.log("Falha ao conectar com o MongoDB!");
  });

app.get("/", async (req, res) => {
   await List.find({}).then((items) => {
     return res.json({
       list: items
     })
   })

   
})

app.post("/save", async (req, res) => {
const data = 
  {
    "status": "false",
    "installKey": "666cd56d-44e7-4d7f-9756-deebe848d7e7",
    "createdAt": "2021-10-06T16:43:43.3485139+00:00",
    "enterpriseName": "terminal terminou",
    "licenseKey": "WkeSKCzSaPCwJ6ZGMnzwPw==",
    "maxNumberOfDevices":79,
    "licensedUntil": "2121-10-06T18:59:00.975269+00:00",
    "licenseModel":1,
    "updatedAt": "0001-01-01T00:00:00"
}

await List.create(data, (err) => {
    if(err) {
        return res.status(400).json({error: err.message});
    }else{
        return res.status(200).json("cadastro feito com sucesso!");
    }
})

    //console.log(conn)
})

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});

