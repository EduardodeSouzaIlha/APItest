const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

app.get('/api', (req, res) => {
res.json({message: "Fist requisition, was successfully"})   
    
})
app.get('/api2', (req, res) => {
    res.json({message: "Fist requisition, was successfully"})   
        
    })

app.post('/create', (req, res) => {
  const name = req.body.product
  const price = req.body.price
    if(!name){

        res.status(422).json({message: `The product need a name`})
        return 
    }
  console.log(name, price)

  res.status(201).json({message: `The product ${name} was successfully created`})
})

app.listen(3000);