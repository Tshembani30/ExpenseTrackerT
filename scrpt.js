let balanceIn = {
    totalIncome: 0,
    totalExpense: 0,
    totalBalance: 0,
    transactions: [],
  }

  getComputed()
  
  displayInHTML()

  // must be showComputer with ID reference from the HTML and display
  let displayIncome = document.getElementById('Balance Salary')
  displayIncome.innerHTML = state.totalIncome

  let displayExpense = document.getElementById('Expense')
  displayExpense.innerHTML = state.totalExpense

  let displayBalance = document.getElementById('Saving Profit')
  displayBalance.innerHTML = state.totalBalance