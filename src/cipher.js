window.cipher = {
  encode: encode,
  decode: decode,
};

function encode(offset, str) {
  let resultE = [];
  const isPositive = offset >= 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
      const offsetTurn = isPositive ? -65 : 65;
      resultE.push(String.fromCharCode((str[i].charCodeAt(0) + offset + offsetTurn) % 26 + 65));
    }
    if (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123) {
      const offsetTurn = isPositive ? -97 : -19;
      resultE.push(String.fromCharCode((str[i].charCodeAt(0) + offset + offsetTurn) % 26 + 97));
    }
    if (str[i].charCodeAt(0) > 47 && str[i].charCodeAt(0) < 58) {
      resultE.push(String.fromCharCode(str[i].charCodeAt(0)));
    }
    if (str[i].charCodeAt(0) === 32) {
      resultE.push(String.fromCharCode(str[i].charCodeAt(0)));
    }
    if ((str[i].charCodeAt(0) >= 0 && str[i].charCodeAt(0) < 32) || (str[i].charCodeAt(0) > 32 && str[i].charCodeAt(0) < 48) || (str[i].charCodeAt(0) > 57 && str[i].charCodeAt(0) < 65) || (str[i].charCodeAt(0) > 90 && str[i].charCodeAt(0) < 97) || (str[i].charCodeAt(0) > 122)) {
      resultE.push(String.fromCharCode(str[i].charCodeAt(0)));
    }
  }
  return resultE.join("");
}

function decode(offset, str) {
  let resultD = [];
  const isPositive = offset >= 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) > 64 && str[i].charCodeAt(0) < 91) {
      const offsetTurn = isPositive ? 65 : -65;
      resultD.push(String.fromCharCode((str[i].charCodeAt(0) -offset + offsetTurn) % 26 + 65));
    }
    if (str[i].charCodeAt(0) > 96 && str[i].charCodeAt(0) < 123) {
      resultD.push(String.fromCharCode((str[i].charCodeAt(0) - offset - 19) % 26 + 97));
    }

    if (str[i].charCodeAt(0) > 47 && str[i].charCodeAt(0) < 58) {
      resultD.push(String.fromCharCode(str[i].charCodeAt(0)));
    }

    if (str[i].charCodeAt(0) === 32) {
      resultD.push(String.fromCharCode(str[i].charCodeAt(0)));
    }
    if ((str[i].charCodeAt(0) >= 0 && str[i].charCodeAt(0) < 32) || (str[i].charCodeAt(0) > 32 && str[i].charCodeAt(0) < 48) || (str[i].charCodeAt(0) > 57 && str[i].charCodeAt(0) < 65) || (str[i].charCodeAt(0) > 90 && str[i].charCodeAt(0) < 97) || (str[i].charCodeAt(0) > 122)) {
      resultD.push(String.fromCharCode(str[i].charCodeAt(0)));
    }
  }
  return resultD.join("");
}

