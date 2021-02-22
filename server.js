const invoicesRouter = require("./routes/invoices");
const usersRouter = require("./routes/users");
const express = require('express')
const morgan = require('morgan')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const path = require('path')
const fs = require('fs')
// Config dotev
require('dotenv').config({
    path:'./config/config.env'
});



// Connect to database
connectDB();

// body parser
app.use(bodyParser.json())
// Load routes
const authRouter = require('./routes/auth.route')
const userRouter = require('./routes/user.route')

// Dev Logging Middleware
if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
}



// Use Routes
app.use('/api', authRouter)
app.use('/api', userRouter)
app.use("/invoices", invoicesRouter);
app.use("/users", usersRouter);
const dirPath = path.join(__dirname, "PDFs");


app.get('/pdfs', (req, res) => {
    res.sendFile(`${dirPath}/Invoice.pdf`);
})





const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});


