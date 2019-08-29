document.getElementById("btn-enviar").addEventListener("click", message)

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
/*
setTimeout(function() {
}, 2000);*/


/*icones limpar*/
let clear = document.querySelector('#clear');
let textarea = document.querySelector('#txt');

clear.addEventListener('click', function () {
  textarea.value = '';
}, false);


let icon2 = document.querySelector('#clear2');
let result = document.querySelector('#result');

icon2.addEventListener('click', function () {
  result.value = '';
}, false);

/*icones limpar*/

const copyTextareaBtn = document.querySelector('#copy');

copyTextareaBtn.addEventListener('click', function(event) {
  const copyTextarea = document.querySelector('#result');
  copyTextarea.select();

  copyTextarea = document.execCommand('copy');
})

/*icone enviar repo*/
const subRepository = document.querySelector('#goRepository');

subRepository.addEventListener('click', function(event) {
  const copyTextarea2 = document.querySelector('#result');


  /*
  copyTextarea2.select();

  copyTextarea2 = document.execCommand('copy');*/
})

