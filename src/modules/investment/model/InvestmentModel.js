const url = config.edBankApi.url

const InvestmentModel = {
    getInvestments: () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
            },
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/investments`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    },

    invest: (params) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
            },
            body: JSON.stringify(params),
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))
        const investmentId = 1

        return fetch(`${url}/account/${accountId}/invest/${investmentId}`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}