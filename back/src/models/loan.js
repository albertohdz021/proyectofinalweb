const mongoose=require('mongoose')
const {Schema}=mongoose;
const time=Date()

const loanSchema=new Schema({
    nameUser:String,
    bookTitle:String,
    loanDate:String,
    returnDate:String
});
module.exports=mongoose.model("prestamos",loanSchema);
