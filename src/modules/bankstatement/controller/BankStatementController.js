const BankStatementController = {

    BankStatement: async() => {
        const initialDate = document.getElementById("initialDate").value;
        const finalDate = document.getElementById("finalDate").value;
        const bankStatement = {
            initialDate: initialDate,
            finalDate: finalDate
        }
        validateBankStatement(bankStatement)
        const response = await BankStatementModel.BankStatement(bankStatement)
        generateBankStatement(response);
        

        console.log(response)
    },

    update: async() => {}
}