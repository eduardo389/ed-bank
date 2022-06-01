const url = config.edBankApi.url

const InvestmentModel = {
    Investment: () => {
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

    }
}