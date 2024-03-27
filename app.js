const express = require('express');
const app = express();
const userRouter = require('./user/routes');
const PORT = process.env.PORT || 5000
app.use(express.json());

app.use('/healthcheck', (req,res)=>{
    res.status(200).send('OK')
})
app.use('/users', userRouter);

app.listen(PORT, ()=> console.log('server is running on 5000'))