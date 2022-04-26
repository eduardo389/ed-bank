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
            .then(token => {
                localStorage.setItem('token-jwt', token.jwt)
            })
            .catch(error => {
                return error
            })

    }
}