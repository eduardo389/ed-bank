const BankStatementController = {

    BankStatement: async() => {
        const initialDate = document.getElementById("initialDate").value;
        const finalDate = document.getElementById("finalDate").value;
        const params = {
            initialDate: initialDate,
            finalDate: finalDate
        }
        validateBankStatement(params)
        const response = await BankStatementModel.BankStatement(params)
        generateBankStatement(params, response);


        console.log(response)
    },

    update: async() => {}
}