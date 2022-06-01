const BankStatementController = {

    BankStatement: async() => {
        const initialDate = document.getElementById("initialDate").value;
        const finalDate = document.getElementById("finalDate").value;
        const params = {
            initialDate: new Date(new Date(initialDate).setUTCHours(0, 0, 0, 0)).toISOString(),
            finalDate: new Date(new Date(finalDate).setUTCHours(23, 59, 59, 999)).toISOString()
        }
        validateBankStatement(params)
        const response = await BankStatementModel.BankStatement(params)
        generateBankStatement(params, response);


        console.log(response)
    },

    update: async() => {}
}