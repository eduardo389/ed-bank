function validateBankStatement(bankStatement){
  let aa = bankStatement.initialDate
  let bb = bankStatement.finalDate
    if (bankStatement.initialDate === "") {
        alert("Data inicial não informada");
        cpf.focus();
        return;
      }
    if (bankStatement.finalDate === "") {
        alert("Data final não informada");
        password.focus();
        return;
      }
}