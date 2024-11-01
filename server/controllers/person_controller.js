const persons = require('express').Router()
const db = require('../models')
const { Person } = db

persons.get('/', async (req, res) => {
    try {
        const foundPersons = await Person.findAll()
        res.status(200).json(foundPersons)
    } catch (err) {
        res.status(500).send('Server Error')
        console.log(err)
    }
})

module.exports = persons