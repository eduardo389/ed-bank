const User = {
    name: '',
    email: '',
    account: {
        id: 0,
        number: '',
        balance: 0
    },
    setName: (name) => {
        localStorage.setItem("userName", btoa(name))
        User.name = name
    },
    getName: () => {
        return User.name
    },
    setAccountNumber: (numberAccount) => {
        localStorage.setItem("userNumberAccount", btoa(numberAccount))
        User.account.number = numberAccount
    },
    getAccountNumber: () => {
        return User.account.number
    },
    setBalance: (balance) => {
        localStorage.setItem("userAccountBalance", btoa(balance))
        User.account.balance = balance
    },
    getBalance: () => {
        return User.account.balance
    },
    setAccountId: (id) => {
        localStorage.setItem("userAccountId", btoa(id))
        User.account.id = id
    },
    getAccountId: () => {
        return User.account.id
    },
    setEmail: (email) => {
        localStorage.setItem("userEmail", btoa(email))
        User.email = email
    },
    getEmail: () => {
        return User.email
    },
}