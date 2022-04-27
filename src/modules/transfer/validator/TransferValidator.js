function validateTransfer(transfer) {

  if (transfer.value === "") {
    alert("Valor não informado");
    valor.focus();
    return;
  }

  if (Math.sign(transfer.value) === -1) {
    alert("O valor não pode ser negativo");
    valor.focus();
    return;
  }
}