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

        return fetch(`URL`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    },
}