const url = config.edBankApi.url

const TransferModel = {
    Transfer: (transfer) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(transfer),
            mode: "cors"
        }

        const accountId = localStorage.getItem('currentAccountId')

        return fetch(`${url}/account/${accountId}/transfer`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}