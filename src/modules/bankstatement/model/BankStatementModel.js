const url = config.edBankApi.url

const BankStatementModel = {
    BankStatement: (bankStatement) => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
            },
            mode: "cors"
        }

        let queryString = `?initialDate=${bankStatement.initialDate}&finalDate=${bankStatement.finalDate}`

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/bank-statements${queryString}`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    },
}