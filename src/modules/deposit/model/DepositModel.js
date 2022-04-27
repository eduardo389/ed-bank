const url = config.edBankApi.url

const DepositModel = {
    Deposit: (deposit) => {
        const token = localStorage.getItem('token-jwt')

        if (!token) {
            return
        }

        const options = {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(token)}`
            },
            body: JSON.stringify(deposit),
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/deposit`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}