function validateDeposit(deposit) {

    if (deposit.value == "") {
        alert("Valor não informado");
        valor.focus();
        return false;
    }

    if (Math.sign(deposit.value) === -1) {
        alert("O valor não pode ser negativo");
        valor.focus();
        return false;
    }

    return true
}