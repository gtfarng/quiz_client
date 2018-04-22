const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const router = express.Router()

let bears = [{id: 1, name: 'Pooh', weight: 70},
    {id: 2, name: 'Winnie', weight: 60}]

app.use(cors())
app.use(express.static('public'))

app.use('/api', bodyParser.urlencoded({extended: false}), router)

router.route('/bears')
    .get((req, res) => {
        res.send(bears)
    })

    .post(
        (req, res) => {
            const bear = {}
            bear.id = bears.length + 1
            bear.name = req.body.name
            bear.weight = req.body.weight
            bears.push(bear)
            res.send(bears)
    })

router.route('/bears/:id')
    .get( (req,res) => {
        res.send(bears[req.params.id])
    })

    .put((req,res ) =>  {
        const id = req.params.id
        bears[id].name = req.body.name
        bears[id].weight = req.body.weight
        res.send( bears)
    })

    .delete( (req,res) => {
        const id = req.params.id
        delete bears[id]
        res.send(bears)
    })

app.listen(8888)
system.log('Start localhost:8888');