const express = require('express')
const http = require('http')






const server = http.createServer((req,res)=>{
  // console.log(req.url, req.headers , req.method)
  if(req.url === '/'){
console.log('Welcome')  }else{  return res.end()
}
}

)
const PORT =3000

server.listen(PORT, ()=> console.log(`Server at http://localhost:${PORT}`))
