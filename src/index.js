function message(event) {
  event.preventDefault()
    
  /* Pegar os dados do HTML */
  const str = document.getElementById("txt").value;
  const offset = parseInt(document.getElementById("offset").value);

  /* <select> <option> */
  const option = document.getElementById("unittype");
  const item = option.options[option.selectedIndex].value;
    
  /* Mostrar resultado de acordo com a opção selecionada */
  if (item == "1") {
    const rEncode = window.cipher.encode(offset, str);
    document.getElementById("result").value = rEncode;

  } else {
    const rDecode = window.cipher.decode(offset,str);
    document.getElementById("result").value = rDecode;
  }
}

setTimeout(function() {
document.getElementById("btn-enviar").addEventListener("click", message);
}, 2000);
