const mongoose = require('mongoose')
const Schema = mongoose.Schema


const clientSchema = new Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    
})

const Login = mongoose.model('login', clientSchema)


module.exports = Login
