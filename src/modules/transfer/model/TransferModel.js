const url = config.edBankApi.url

const TransferModel = {
    Transfer: (transfer) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
            },
            body: JSON.stringify(transfer),
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/transfer`, options)
            .then(async response => {
                if (response.status !== 201) {
                    const body = await response.json()
                    return Promise.reject({ status: response.status, error: body })
                }
                return response.json()
            })
            .catch(error => {
                return Promise.reject(error)
            })

    }
}