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
    },
    updateUserInfo: async(user) => {
        User.setName(user.name)
        User.setAccountId(user.accounts[0].id)
        User.setAccountNumber(user.accounts[0].number)
        User.setBalance(user.accounts[0].balance)
        User.setEmail(user.email)
    }
}