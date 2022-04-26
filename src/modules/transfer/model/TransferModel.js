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

        return fetch(`${url}/account/{id}/transfer`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}