function checkCashRegister(price, cash, cid) {

  const ocorrencias = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  };

  let changeDue = parseFloat((cash - price).toFixed(2));
  let totalCid = parseFloat(
    cid.reduce((sum, [, amount]) => sum + amount, 0).toFixed(2)
  );

  if (changeDue > totalCid) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (changeDue === totalCid) {
    return { status: "CLOSED", change: cid };
  }

  const change = [];
  const reversedCid = [...cid].reverse();

  for (let [name, amountAvailable] of reversedCid) {
    const value = ocorrencias [name];
    let amountToGive = 0;

    while (changeDue >= value && amountAvailable >= value) {
      changeDue = parseFloat((changeDue - value).toFixed(2));
      amountAvailable = parseFloat((amountAvailable - value).toFixed(2));
      amountToGive = parseFloat((amountToGive + value).toFixed(2));
    }

    if (amountToGive > 0) {
      change.push([name, amountToGive]);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change };
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
