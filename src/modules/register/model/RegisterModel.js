const url = "https://edbank-backend.herokuapp.com/v1"
const RegisterModel = {
    register: (user) => {
        const options = {
            method: 'POST',
            body: user,
            mode: "cors"
          }

        return fetch(`${url}/user`, options)
        .then(response => response) 

    }
}
