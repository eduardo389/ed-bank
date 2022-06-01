const url = config.edBankApi.url

const InvestmentModel = {
    getInvestments: () => {
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

        const accountId = atob(localStorage.getItem('userAccountId'))

        return fetch(`${url}/account/${accountId}/investments`, options)
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

    invest: (params) => {
        const token = localStorage.getItem('token-jwt')

        if (!token) {
            return
        }

        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(token)}`
            },
            body: JSON.stringify(params),
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))
        const investmentId = 1

        return fetch(`${url}/account/${accountId}/invest/${investmentId}`, options)
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