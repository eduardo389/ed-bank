const url = config.edBankApi.url

const InvestmentModel = {
    getInvestments: () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
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
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
            },
            body: JSON.stringify(params),
            mode: "cors"
        }

        const accountId = atob(localStorage.getItem('userAccountId'))
        const investmentId = 1

        return fetch(`${url}/account/${accountId}/invest/${investmentId}`, options)
            .then(response => {
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