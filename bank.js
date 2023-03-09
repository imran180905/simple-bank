document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmount = document.getElementById('deposit-money');
    const NewDepositMoneyString = depositAmount.value;
    const NewDepositAmount = parseFloat(NewDepositMoneyString);

    console.log(NewDepositAmount);
    console.log(typeof (NewDepositAmount));

    const depositTotalField = document.getElementById('total-deposit');
    const previousTotalDepositString = depositTotalField.innerText;
    const previousDepositAmount = parseFloat(previousTotalDepositString);
    const currentDeposit = NewDepositAmount + previousDepositAmount;
    depositTotalField.innerText = currentDeposit;

    // update total balance
    const totalBalanceField = document.getElementById('neat-balance');
    const previousTotalBalanceString = totalBalanceField.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);
    const totalNewBalance = NewDepositAmount  + previousTotalBalanceAmount;
    totalBalanceField.innerText = totalNewBalance;

    depositAmount.value = '';





})
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const WithdrawAmount = document.getElementById('Withdraw-money');
    const NewWithdrawMoneyString = WithdrawAmount.value;
    const NewWithdrawAmount = parseFloat(NewWithdrawMoneyString);

    console.log(NewWithdrawAmount);
    console.log(typeof (NewWithdrawAmount));

    const withdrawTotalField = document.getElementById('total-withdraw');
    const previousTotalWithdrawString = withdrawTotalField.innerText;
    const previousWithdrawAmount = parseFloat(previousTotalWithdrawString);
    

    // update total balance
    const totalBalanceField = document.getElementById('neat-balance');
    const previousTotalBalanceString = totalBalanceField.innerText;
    const previousTotalBalanceAmount = parseFloat(previousTotalBalanceString);


    if(NewWithdrawAmount <= previousTotalBalanceAmount){
        const newBalance = previousTotalBalanceAmount - NewWithdrawAmount;
        totalBalanceField.innerText = newBalance;

        
    }
    else{
        alert('Insufficient balance');
        return;

    }
    const currentWithdraw = NewWithdrawAmount + previousWithdrawAmount;
    withdrawTotalField.innerText = currentWithdraw;
    


    WithdrawAmount.value = '';





})

