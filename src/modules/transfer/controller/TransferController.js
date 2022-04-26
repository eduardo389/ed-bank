const TransferController = {

    Transfer: async() => {
        const account = document.getElementById("account").value;
        const value = document.getElementById("value").value;
        const transfer = {
            account,
            value
        }
        validateTransfer(transfer)
        const response = await TransferModel.Transfer(transfer)
        console.log(response)
        return response
    },

    update: async() => {}
}