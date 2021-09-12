const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/bmi', (req,res) =>{
    res.sendFile(__dirname + '/bmi.html')
})

app.post('/bmi', (req, res)=>{
    var weight = Number(req.body.number1)
    var height = Number(req.body.number2)
    var bmi = Math.floor(weight/(height * height))
    res.send(`Your BMI is ${bmi}`)
})

app.post('/', (req,res) =>{
    var symbol = eval(req.body.functions)
    var number1 = Number(req.body.number1)
    var number2 = Number(req.body.number2)    
    var result = calculate(symbol, number1, number2)
    console.log(result);
    res.send(`The answer is ${result}`)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
})

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function calculate(operation, number1, number2) {
    return operation(number1, number2)    
}