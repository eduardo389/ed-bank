const DepositController = {

    Deposit: async() => {
        const value = document.getElementById("value").value;
        const deposit = {
            value
        }
        validateDeposit(deposit)
        const response = await DepositModel.Deposit(deposit)
        console.log(response)
        return response
    },

    update: async() => {}
}