const express = require("express")
const verifyToken = require("../middlewares/authMiddleware")
const authorizeRoles = require("../middlewares/roleMiddleware")
const router = express.Router()

//  Only Admin can access
router.get("/admin",verifyToken, authorizeRoles ("admin"), (req,res)=>{
res.json({message:"Welcome admin"})
})

//  Both admin and vendor can access
router.get("/vendor",verifyToken, authorizeRoles ("admin","vendor"), (req,res)=>{ 
res.json({message:"Welcome vendor"})
})


//  All can access this router
router.get("/user",verifyToken, authorizeRoles ("admin","vendor","user"), (req,res)=>{
res.json({message:"Welcome user"})
})



module.exports = router; 