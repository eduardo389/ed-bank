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
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })
    },
    get: () => {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token-jwt')}`
            },
            mode: "cors"
        }

        return fetch(`${config.edBankApi.url}/user`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}