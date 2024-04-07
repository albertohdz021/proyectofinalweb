const Loan = require('../Models/Loan');

const getAllLoan = async(req, res)=>{
    try{
        const loan = await Loan.find();
        res.status(200).json(loan);
    }catch(err){
        console.log(err);
    }
}
const getLoan = async(req, res)=>{
    try{
        const loan = await Loan.findById(req.params.id);
        res.status(200).json(loan);
    }catch(err){
        console.log(err);
    }
}

const addLoan = async(req, res)=>{
    try{
        const newLoan = new Loan(req.body);
        await newLoan.save();
        res.status(201).json(newLoan);
    }catch(err){
        console.log(err);
    }
    }

    const deleteLoan = async(req, res)=>{
        try{
            const loan = await Loan.findByIdAndDelete(req.params.id);
            res.status(200).json(loan);
        }catch(err){
            console.log(err);
        }
    }
module.exports = {getAllLoan, getLoan, addLoan, deleteLoan};
