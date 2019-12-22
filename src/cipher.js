window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, str) {
  let resultE = [];
  const isPositive = offset >= 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      const offsetTurn = isPositive ? -65 : 65;
      resultE.push(String.fromCharCode((str.charCodeAt(i) + offset + offsetTurn) % 26 + 65));
    } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      const offsetTurn = isPositive ? -97 : -19;
      resultE.push(String.fromCharCode((str.charCodeAt(i) + offset + offsetTurn) % 26 + 97));
    } else {
      resultE.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  return resultE.join("");
}

function decode(offset, str) {
  let resultD = [];
  const isPositive = offset >= 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
      const offsetTurn = isPositive ? 65 : -65;
      resultD.push(String.fromCharCode((str.charCodeAt(i) -offset + offsetTurn) % 26 + 65));
    }
    else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
      resultD.push(String.fromCharCode((str.charCodeAt(i) - offset - 19) % 26 + 97));
    } else {
      resultD.push(String.fromCharCode(str.charCodeAt(i)));
    }
  }
  return resultD.join("");
}

