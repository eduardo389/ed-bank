const BankStatementModel = {
    BankStatement: (bankStatement) => {
        const token = localStorage.getItem('token-jwt')

        if (!token) {
            return
        }

        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(token)}`
            },
            mode: "cors"
        }

        let queryString = `?initialDate=${bankStatement.initialDate}&finalDate=${bankStatement.finalDate}`

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/bank-statements${queryString}`, options)
            .then(async response => {
                if (response.status !== 200) {
                    const body = await response.json()
                    return Promise.reject({ status: response.status, error: body })
                }
                return response.json()
            })
            .catch(error => {
                return Promise.reject(error)
            })

    },
}