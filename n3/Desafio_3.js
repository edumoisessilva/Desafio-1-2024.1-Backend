function rot13(str) {
  
  return str.split('').map(char => {
    const code = char.charCodeAt(0);

    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + 13) % 26) + 65);
    }
    
    else if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + 13) % 26) + 97);
    }
    
    else {
      return char;
    }
  }).join('');
}

rot13("SERR PBQR PNZC");
