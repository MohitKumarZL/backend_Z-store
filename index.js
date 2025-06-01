const express = require('express')
const app=express();



app.get("/",(req, res, next)=>{
    console.log("Register 1")

  res.send(`<h2>Welcome in new app</h2>
    <a href="/add-home">go to home</a>`
  )
})

app.get("/add-home",(req,res,next)=>{
  console.log("Register")
  res.send(`
    <h2> Welcome to Register</h2>
    <form action="/add-home" method="POST">
    <input type="text" placeholder="Enter your name"/>
    <input type="submit"/>
    </form>
    `)
})


app.post("/add-home",(req,res,next)=>{
  console.log("Register")
  res.send(`
    <h2> Registered Display</h2>
    `)
})




const PORT = 3000
app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`))
