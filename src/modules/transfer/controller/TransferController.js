const TransferController = {

    Transfer: async() => {
        try {
            const account = document.getElementById("account").value;
            const value = document.getElementById("value").value;
            const transfer = {
                receiverAccountNumber: account,
                value: Number(value)
            }
            validateTransfer(transfer)

            const response = await TransferModel.Transfer(transfer)

            const user = await UserModel.get()

            localStorage.setItem('userAccountBalance', btoa(user.accounts[0].balance))

            alert(`Transferência no valor de R$ ${value} realizada com sucesso para a conta conta ${account}`)

            window.location.pathname = "src/modules/user/view/home.html"
        } catch (error) {
            if (error.status === 400) {
                if (error.error.message === "INSUFFICIENT_BALANCE") {
                    alert(`Saldo insuficiente.`)
                }
            } else if (error.status === 403) {
                alert(`Seu token de acesso expirou. Por favor, faça login novamente.`)
                localStorage.clear()
                window.location.pathname = "src/modules/login/view/login.html"
            } else if (error.status === 404) {
                alert(`Conta não encontrada. Verifique o número da conta.`)
            } else {
                alert('Ops! Algum erro inesperado aconteceu! Tente novamente mais tarde.')
            }
        }
    },

    update: async() => {}
}