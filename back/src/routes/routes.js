const express = require('express');
const router = express.Router();

//!------------------------------------books---------------------------------------!\\
const {getAllBooks,getById,addBook,updateBook,deleteBook, searchBook} = require('../Controllers/BooksController')
router.get('/books/:id',getById)
router.post('/books',addBook)
router.put('/books/:id',updateBook)
router.get('/books',getAllBooks)
router.delete('/books/:id',deleteBook)
router.get('/books/s/:titulo',searchBook)



//!------------------------------------users---------------------------------------!\\
const {getAllUsers,getUserById,addUser,updateUser,deleteUser} = require('../Controllers/UserController')
router.get('/users',getAllUsers)
router.get('/users/:id',getUserById)
router.post('/users',addUser)
router.delete('/users/:id',deleteUser)


//!-----------------------------------Loan---------------------------------------!\\
const {getAllLoan,addLoan,deleteLoan,getLoan} = require('../Controllers/LoanController')
router.get('/loans', getAllLoan)
router.get('/loans/:id', getLoan)
router.post('/loans', addLoan)
router.delete('/loans/:id', deleteLoan)

module.exports=router
