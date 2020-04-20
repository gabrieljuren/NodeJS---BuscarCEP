const express = require('express');
const Correios = require('node-correios');
const cors = require('cors');
const correios = new Correios();
const app = express();
const PORT = 3333;
app.use(cors({}));

app.get('/', (req, res) => {
    const {tracking} = req.query
    
    correios.consultaCEP({ cep: tracking})
    .then((result) => {
        res.json({message: 'ok', tracking, result});
        console.log(result);
    })   
    .catch((error) => {
        res.json({message: 'error', tracking, result});
    });  
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`)); 