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
            .then(async response => {
                if (response.status !== 200) {
                    const body = await response.json()
                    return Promise.reject({ status: response.status, error: body })
                }
                return response.json()
            })
            .then(response => {
                localStorage.setItem('token-jwt', btoa(response.token))
            })
            .catch(error => {
                return Promise.reject(error)
            })

    }

}