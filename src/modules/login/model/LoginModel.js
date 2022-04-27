const url = config.edBankApi.url

const LoginModel = {
    login: (user) => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
            mode: "cors"
        }

        return fetch(`${url}/auth/login`, options)
            .then(response => {
                return response.json()
            })
            .then(response => {
                localStorage.setItem('token-jwt', response.token)
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
                'authorization': `Bearer ${localStorage.getItem('jwt-token')}`
            },
            mode: "cors"
        }

        return fetch(`${url}/user`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    }
}