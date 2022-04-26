const url = config.edBankApi.url

const DepositModel = {
    Deposit: (deposit) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwt-token')
            },
            body: JSON.stringify(deposit),
            mode: "cors"
        }

        const accountId = localStorage.getItem('currentAccountId')

        return fetch(`${url}/account/${accountId}/deposit`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}