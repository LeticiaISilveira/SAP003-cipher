document.getElementById("btn-enviar").addEventListener("click", message);

function message(event) {
  event.preventDefault();

  const str = document.getElementById("txt").value;
  const offset = parseInt(document.getElementById("offset").value || 0);

  const option = document.getElementById("option");
  const item = option.options[option.selectedIndex].value;
  if (item == "1") {
    const rEncode = window.cipher.encode(offset, str);
    document.getElementById("txt").value = rEncode;
  } else {
    const rDecode = window.cipher.decode(offset, str);
    document.getElementById("txt").value = rDecode;
  }
}
 
clear.addEventListener("click", function () {
  const textArea = document.getElementById("txt");
  textArea.value = "";
}, false);

copy.addEventListener("click", function () {
  const textArea = document.getElementById("txt")
  textArea.select();
  textArea = document.execCommand("copy");
});

