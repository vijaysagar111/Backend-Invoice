const mongoose = require('mongoose');


const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:true,
        useUnifiedTopology:true
    }).then((resp) => console.log('Connected to Db')).catch(err => console.log(err))
}


module.exports = connectDB