const operationTypeDictionary = {
    INPUT: "Entrada",
    OUTPUT: "Saída"
}

const obsDictionary = {
    DEPOSIT: "Operação de Depósito",
    TRANSFER: "Operação de Transferência",
    INVESTMENT: "Investimento",
    INVESTMENT_RECLAIM: "Resgate de Investimento",
}

const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'brl',
});

function generateBankStatement(period, bankStatements) {
    var doc = new jsPDF()
    doc.setProperties({
        title: `Extrato Bancário`
    });

    const userName = atob(localStorage.getItem('userName'))
    const userNumberAccount = atob(localStorage.getItem('userNumberAccount'))

    const header = `
                                                ED Bank
                        Extrato Bancário - ${period.initialDate} - ${period.finalDate}
                    Nome: ${userName}       Conta: ${userNumberAccount}        

        -----------------------------------------------------------------------------------------------    
    `

    const body = bankStatements.reduce((acc, bankStatement) => {
        acc += `
            Operação de: ${operationTypeDictionary[bankStatement.bankTransactionType]}
            Data da operação: ${new Date(bankStatement.createdOn).toLocaleString()}  
            Valor: ${formatter.format(bankStatement.value)}
            Observações: ${obsDictionary[bankStatement.obs.replace(' ', '_')]}
        -----------------------------------------------------------------------------------------------
        `
        return acc
    }, '')


    const extract = `
        ${header}
        ${body}
    `

    doc.text(extract, 10, 10)
    window.open(URL.createObjectURL(doc.output("blob")))
}