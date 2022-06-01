const DepositController = {

    Deposit: async() => {
        try {

            const value = document.getElementById("value").value;
            const deposit = {
                value: Number(value)
            }
            if (!validateDeposit(deposit)) return
            const response = await DepositModel.Deposit(deposit)

            localStorage.setItem("userAccountBalance", btoa(response.balance))
            console.log(response)
            alert(`Valor de R$ ${value} depositado com sucesso na conta ${response.number}`)

            window.location.pathname = "src/modules/user/view/home.html"
        } catch (error) {
            if (error.status === 403) {
                alert(`Seu token de acesso expirou. Por favor, faça login novamente.`)
                window.location.pathname = "src/modules/login/view/login.html"
            } else {
                alert('Ops! Algum erro inesperado aconteceu! Tente novamente mais tarde.')
            }
        }
    },

    update: async() => {}
}