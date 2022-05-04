function validateExtract(extract){
  let aa = extract.initialDate
  let bb = extract.finalDate
    if (extract.initialDate === "") {
        alert("Data inicial não informada");
        cpf.focus();
        return;
      }
    if (extract.finalDate === "") {
        alert("Data final não informada");
        password.focus();
        return;
      }
}