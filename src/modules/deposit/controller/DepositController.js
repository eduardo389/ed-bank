const DepositController = {

    Deposit: async() => {
        const value = document.getElementById("value").value;
        const deposit = {
            value: Number(value)
        }
        validateDeposit(deposit)
        const response = await DepositModel.Deposit(deposit)

        if (response && response.number) {
            localStorage.setItem("userAccountBalance", btoa(response.balance))
            console.log(response)
            alert(`Valor de R$ ${value} depositado com sucesso na conta ${response.number}`)

            window.location.pathname = "src/modules/user/view/home.html"
        } else {
            alert(`Houve uma falha na tentativa de depósito`)
        }
    },

    update: async() => {}
}