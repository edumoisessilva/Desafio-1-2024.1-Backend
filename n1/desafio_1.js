function palindrome(palavra) {
  let limpar = palavra.toLowerCase().replace(/[^a-z0-9]/g, '');
  const palavraContrario = limpar.split('').reverse().join('');
  return limpar === palavraContrario;
}

palindrome("eye");
