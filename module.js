const mongoose = require('mongoose')

// mongoose.connect(`mongodb://127.0.0:27017/userData`)
mongoose.connect('mongodb://127.0.0.1:27017/userData')

const userData=mongoose.Schema({
   Name:String,
   Number:Number
})
module.exports= mongoose.model('users',userData)