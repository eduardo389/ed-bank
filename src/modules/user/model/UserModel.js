const url = config.edBankApi.url

const UserModel = {
    accounts:[],
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

        return fetch(`${url}/user`, options)
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
                'Authorization': localStorage.getItem('jwt-token')
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