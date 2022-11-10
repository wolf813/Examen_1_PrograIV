const express = require('express')

class S1 {
    constructor(){
        this.main = express()
        this.routes();
    }

    routes(){
        this.main.get('/',(req, res) => res.send('Examen1'))
        this.main.use('/examen1', require('../routes/examen1'))
        
    }
    listen(){
        this.main.listen(process.env.PORT, ()=>
            console.log("Puerto abierto: "+ process.env.PORT))
    }
}

module.exports = S1