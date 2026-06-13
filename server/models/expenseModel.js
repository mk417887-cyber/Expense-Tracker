const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true,
    // },
    description: {
        type: String,
        required: true,
        trim: true,
        maxLength: 100,
    },
    amount: {
        type: Number,
        required: true,
        min: 0.01,
    },
    category: {
        type: String,
        required: true,
        enum: ["Food", "Transportation", "Entertainment", "Shopping" ,"Bills" , "Healthcare" , "Other"],
    },
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    notes: {
        type: String,
        trim: true,
        maxLength: 500,
    }, 

},

{
    timestamps: true,
});

expenseSchema.pre( "save", function(next) {
        if(this.amount) this.amount = Math.round    (this.amount * 100) / 100;
        next();
})

const Expense = mongoose.model("CopyExpense", expenseSchema);
module.exports = Expense;