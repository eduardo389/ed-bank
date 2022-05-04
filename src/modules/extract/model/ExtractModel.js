const url = config.edBankApi.url

const ExtractModel = {
    Extract: (extract) => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors"
        }

        return fetch(`URL`, options)
            .then(response => {
                return response.json()
            })
            .catch(error => {
                return error
            })

    },
}