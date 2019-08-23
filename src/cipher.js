window.cipher = {
  encode: encodeMsg,
  decode: decodeMsg,
};

function encodeMsg(offset, str) {
  let resultE ="";
  for (let i=0; i<str.length; i++) {
    resultE += String.fromCharCode((str[i].charCodeAt(0)+offset-65)%26+65);
  }
  return resultE;
}

function decodeMsg(offset, str) {
  let resultD ="";
  for (let i=0; i<str.length; i++) {
    resultD += String.fromCharCode((str[i].charCodeAt(0)-offset+65)%26+65);
  }
  return resultD;
}
