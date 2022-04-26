function validateDeposit(deposit){

    if (deposit.value == "") {
        alert("Valor não informado");
        valor.focus();
        return;
      }
    
    if(Math.sign(deposit.value) = -1){
        alert("O valor não pode ser negativo");
        valor.focus();
        return;
    }  
}