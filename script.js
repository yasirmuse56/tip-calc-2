function calcTip(bill) {
    let tip;
    if (bill >= 50 && bill <= 300) {
      tip = bill * 0.15
    } else {
      tip = bill * 0.20
    }
  
    const totalValue = bill + tip;
  
    return `The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`
  }
  
  const billValue = 185;
  const result = calcTip(billValue);
  console.log(result);
  