const TransferController = {

    Transfer: async() => {
        const account = document.getElementById("account").value;
        const value = document.getElementById("value").value;
        const transfer = {
            receiverAccountNumber: account,
            value: Number(value)
        }
        validateTransfer(transfer)
        const response = await TransferModel.Transfer(transfer)
        console.log(response)

        const user = await UserModel.get()

        localStorage.setItem('userAccountBalance', btoa(user.accounts[0].balance))

        alert(`Transferência no valor de R$ ${value} realizada com sucesso para a conta conta ${account}`)

        window.location.pathname = "src/modules/user/view/home.html"
    },

    update: async() => {}
}