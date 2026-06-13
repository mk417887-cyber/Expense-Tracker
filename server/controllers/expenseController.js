const Expense = require("../models/expenseModel");

exports.getAllExpense = async(req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json({
            success: true,
            count: expenses.length,
            data: expenses
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

exports.createExpense = async(req, res) => {
    try {
        const {
            description,
            amount,
            category,
            date,
            notes
        } = req.body;

        const expense = new Expense({
            description,
            amount,
            category,
            date,
            notes
        });

        const   newExpense = await expense.save();

        res.status(201).json({
            success: true,
            data: newExpense
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

exports.updateExpense = async(req, res) => {
    try {
        const updateExpense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!updateExpense) {
            return res.status(404).json({
                success: false,
                error: "Expense not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updateExpense
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}

exports.deleteExpense = async(req, res) => {
    try {
        const deleteExpense = await Expense.findByIdAndDelete(req.params.id);

        if (!deleteExpense) {
            return res.status(404).json({
                success: false,
                error: "Expense not found"
            });
        }

        res.status(200).json({
            success: true,
            data: {},
            message: "Expense deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: "Server Error"
        });
    }
}
