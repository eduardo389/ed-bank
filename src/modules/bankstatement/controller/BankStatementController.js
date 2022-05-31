const BankStatementController = {

    BankStatement: async() => {
        const initialDate = document.getElementById("initialDate").value;
        const finalDate = document.getElementById("finalDate").value;
        const bankStatement = {
            initialDate: initialDate,
            finalDate: finalDate
        }
        validateBankStatement(bankStatement)
        //generateBankStatement();
        //const response = await BankStatementModel.BankStatement(bankStatement)

        console.log(response)
    },

    update: async() => {}
}