const express = require('express')
const app = express()

const connectDB = require('./config/db')
connectDB()


app.use(express.json({extended:true}))

app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/guests', require('./routes/guests'))

const PORT = process.env.PORT || 5000
//  app.use('/user',require('./route/user_route'))


app.listen(PORT, ()  =>console.log(`server running on port ${PORT}`))
