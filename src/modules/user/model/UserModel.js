const UserModel = {
    accounts: [],
    create: (user) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            mode: "cors"
        }

        return fetch(`${config.edBankApi.url}/user`, options)
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
    },
    get: () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${atob(localStorage.getItem('token-jwt'))}`
            },
            mode: "cors"
        }

        return fetch(`${config.edBankApi.url}/user`, options)
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

    }
}