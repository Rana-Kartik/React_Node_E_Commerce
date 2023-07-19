const express = require('express');
const User = require('./Db/User');
const cors = require('cors')

require('./Db/config')

const app = express()
app.use(express.json())
app.use(cors())
app.post('/register', async (req,res) => {
    const user = User(req.body)
    const result =await user.save()
    result = result.toObject()
    delete result.password
    res.send(result)
    res.end()
})

app.post('/login',(req,res) => {
    const user = User.findOne(req.body).select("-password")
    res.send(user)
})

app.get('/', (req, res) => {
   res.send("app runnig...")
})

app.listen(5000,() => {
    console.log("server running on port 5000")
})