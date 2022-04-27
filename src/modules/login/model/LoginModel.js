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

        return fetch(`${config.edBankApi.url}/auth/login`, options)
            .then(response => {
                return response.json()
            })
            .then(response => {
                localStorage.setItem('token-jwt', response.token)
            })
            .catch(error => {
                return error
            })

    }

}