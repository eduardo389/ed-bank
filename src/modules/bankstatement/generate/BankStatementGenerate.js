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
    var doc = new jsPDF('p', 'pt', 'a4')

    var pageWidth = 595;
    var pageHeight = 842;
    var y = 500;
    var pageMargin = 10;

    pageWidth -= pageMargin * 2;
    pageHeight -= pageMargin * 2;

    var cellMargin = 5;
    var cellWidth = 250;
    var cellHeight = 100;

    var startX = pageMargin;
    var startY = pageMargin;

    doc.setProperties({
        title: `Extrato Bancário`
    });

    const userName = atob(localStorage.getItem('userName'))
    const userNumberAccount = atob(localStorage.getItem('userNumberAccount'))

    const header = `
                                                ED Bank
                        Extrato Bancário - ${period.initialDate.split('T')[0]} - ${period.finalDate.split('T')[0]}
                    Nome: ${userName}       Conta: ${userNumberAccount}        

        -----------------------------------------------------------------------------------------------    
    `
    doc.text(header, startX, startY)

    startY += cellHeight

    bankStatements.forEach((bankStatement) => {
        console.log({ startY, pageHeight })
        if (startY + cellHeight >= pageHeight) {
            doc.addPage();
            startY = pageMargin
        }

        const statement = `
        Operação de: ${operationTypeDictionary[bankStatement.bankTransactionType]}
        Data da operação: ${new Date(bankStatement.createdOn).toLocaleString()}  
        Valor: ${formatter.format(bankStatement.value)}
        Observações: ${obsDictionary[bankStatement.obs.replace(' ', '_')]}
        -----------------------------------------------------------------------------------------------
        `
        doc.text(statement, startX, startY)
        startY += cellHeight
    })

    window.open(URL.createObjectURL(doc.output("blob")))
}