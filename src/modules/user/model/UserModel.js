// const url = "https://edbank-backend.herokuapp.com/v1"
const url = "http://localhost:3000/v1"
const UserModel = {
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

        console.log(options)

        return fetch(`${url}/user`, options)
            .then(response => {
                console.log(response)
                return response.json()
            })
            .catch(error => {
                console.log(error)
                return error
            })

    }
}