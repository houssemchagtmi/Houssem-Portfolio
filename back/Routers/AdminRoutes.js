const express=require('express')
const { register, login } = require('../controler/AdminControler')
const Router=express.Router()


Router.post('/register',register)

Router.post('/login',login)

// Router.get('/',getLawyers)

// Router.get('/:id',getLawyer)

// Router.put('/:id',LawyerMiddleware,updateLawyer)

// Router.delete('/:id',LawyerMiddleware,deleteLawyer)





module.exports=Router