document.getElementById("btn-enviar").addEventListener("click", message);

function message(event) {
  event.preventDefault();
    
  /* Pegar os dados do HTML */
  const str = document.getElementById("txt").value;
  const offset = parseInt(document.getElementById("offset").value || 0);

  /* <select> <option> */
  const option = document.getElementById("option");
  const item = option.options[option.selectedIndex].value;
    
  /* Mostrar resultado de acordo com a opção selecionada */
  if (item == "1") {
    const rEncode = window.cipher.encode(offset, str);
    document.getElementById("txt").value = rEncode;

  } else {
    const rDecode = window.cipher.decode(offset, str);
    document.getElementById("txt").value = rDecode;
  }
}

/*limpar e copiar*/
let textArea = document.querySelector("#txt");
const clear = document.querySelector("#clear");
const copy = document.querySelector("#copy");

clear.addEventListener("click", function () {
  textArea.value = "";
}, false);

copy.addEventListener("click", function() {
  textArea.select();
  textArea = document.execCommand("copy");
});

