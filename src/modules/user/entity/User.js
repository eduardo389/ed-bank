const User = {
    name: '',
    account: {
        number: '',
        balance: 0
    },
    setName: (name) => {
        User.name = name
    },
    getName: () => {
        return User.name
    },
    setAccountNumber: (numberAccount) => {
        User.account.number = numberAccount
    },
    getAccountNumber: () => {
        return User.account.number
    },
}