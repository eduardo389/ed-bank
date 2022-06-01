const UserController = {

    getInvestments: async() => {
        try {
            const response = await InvestmentModel.getInvestments()
            return response
        } catch (error) {

        }
    },

    invest: async() => {
        try {
            const desc = document.getElementById("investment-desc").value;
            const value = document.getElementById("investment-value").value;

            const params = {
                desc,
                value: Number(value)
            }

            validateInvestment(params)

            const response = await InvestmentModel.invest(params)

            if (response) {
                alert(`Valor de R$ ${value} investido com sucesso!`)
                window.location.pathname = "src/modules/user/view/home.html"
            }

            return response
        } catch (error) {
            if (error.status === 400) {
                if (error.error.message === "INSUFFICIENT_BALANCE") {
                    alert(`Saldo insuficiente.`)
                }
            } else if (error.status === 403) {
                alert(`Seu token de acesso expirou. Por favor, faça login novamente.`)
                window.location.pathname = "src/modules/login/view/login.html"
            } else if (error.status === 404) {
                if (error.error.message === "ACCOUNT_NOT_FOUND") {
                    alert(`Conta não encontrada. Verifique o número da conta.`)
                } else if (error.error.message === "INVESTMENT_NOT_FOUND") {
                    alert(`Opção de investimento não encontrada.`)
                }
            } else {
                alert('Ops! Algum erro inesperado aconteceu! Tente novamente mais tarde.')
            }
        }
    }
}