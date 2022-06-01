const UserController = {

    getInvestments: async() => {
        const response = await InvestmentModel.getInvestments()
        return response
    },

    invest: async() => {
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
    }
}