const url = config.edBankApi.url

const BankStatementModel = {
    BankStatement: (bankStatement) => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/bank-statements`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    },
}