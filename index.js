const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('I am from backend.. how are you?')
  })


//   app.get("/user",(req, res) =>{
//     res.send("ami user")
//    })

   const users = [
    {name:"mysa", email:"zafreenmysa24@gmail.com", description:"I am a person who is positive about every aspect of life"},
    {name:"Athina", email:"athinamonalisa25@gmail.com", description:"I am an HR professional working towards mitigating the gap between academic knowledge and professional skills."},
    {name:"priyanka", email:"priyanka11@gmail.com", description:"I'm hard-working, driven and fearless"},
   ]

   app.get("/user",(req, res) =>{
    res.send(users)
   })

   app.get("/home",(req, res) =>{
    res.send("Welcome")
   })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
