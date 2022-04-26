const url = config.edBankApi.url

const DepositModel = {
    Deposit: (deposit) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(deposit),
            mode: "cors"
        }

        return fetch(`${url}/account/{id}/deposit`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}