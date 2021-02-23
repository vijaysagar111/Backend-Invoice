const mongoose = require('mongoose')
const Schema = mongoose.Schema


const clientSchema = new Schema({
    name: String,
    email: String,
    password: String
})

const Users = mongoose.model('registeredUser', clientSchema)


module.exports = Users
