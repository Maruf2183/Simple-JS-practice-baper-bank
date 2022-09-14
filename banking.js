console.log("js conncetded successfully");
const tag = id => document.getElementById(id);
const inputValue = id => parseFloat(tag(id).value);
const tagText = id => parseFloat(tag(id).innerText);
// depositing....>>
document.getElementById('deposit').addEventListener('click', () => {
    const depositAmount = inputValue('deposit-amount');

    if (isNaN(depositAmount)) {
        alert('please input a valid number')
    }
    else {
        tag('deposit-bank').innerText =tagText('deposit-bank')+depositAmount;
        tag('deposit-amount').value = '';
        tag('balance-bank').innerText =tagText('balance-bank')+depositAmount;
    }
})
   
   
  
// withdrawing
document.getElementById('withdraw-button').addEventListener('click', () => {
    const withdrawAmount = inputValue('withdraw-amount');
    if (withdrawAmount <= tagText('balance-bank')) {
        console.log('get into first');
        tag('balance-bank').innerText = tagText('balance-bank') - withdrawAmount;
        tag('withdraw').innerText = tagText('withdraw') + withdrawAmount;
        tag('withdraw-amount').value = '';
    }
    else if (isNaN(withdrawAmount)) {
        alert("Please input a Number")
        tag('withdraw-amount').value = '';
        
    }
    else if (withdrawAmount > tagText('balance-bank')) {
        alert('Opps! Balance Low')
        tag('withdraw-amount').value = '';
    }
    else {
        console.log("get into else", withdrawAmount);
        tag('withdraw-amount').value = '';
        
    }
}
    
)
        
        
    
   

    



   
    

    














