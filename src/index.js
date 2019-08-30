document.getElementById("btn-enviar").addEventListener("click", message)

function message(event) {
  event.preventDefault()
    
  /* Pegar os dados do HTML */
  const str = document.getElementById("txt").value;
  const offset = parseInt(document.getElementById("offset").value || 0);

  /* <select> <option> */
  const option = document.getElementById("unittype");
  const item = option.options[option.selectedIndex].value;
    
  /* Mostrar resultado de acordo com a opção selecionada */
  if (item == "1") {
    const rEncode = window.cipher.encode(offset, str);
    document.getElementById("txt").value = rEncode;

  } else {
    const rDecode = window.cipher.decode(offset,str);
    document.getElementById("txt").value = rDecode;
  }
}

/*icones limpar*/
let clear = document.querySelector('#clear');
let textarea = document.querySelector('#txt');

clear.addEventListener('click', function () {
  textarea.value = '';
}, false);

const copyTextareaBtn = document.querySelector('#copy');

copyTextareaBtn.addEventListener('click', function(event) {
  const copyTextarea = document.querySelector('#txt');
  copyTextarea.select();

  copyTextarea = document.execCommand('copy');
})

/*icone enviar repo
const subRepository = document.querySelector('#goRepository');

subRepository.addEventListener('click', function(event) {
  const copyTextarea2 = document.querySelector('#result');

})
*/
