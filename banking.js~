console.log("Script Connected");
const elementOf = id => document.getElementById(id);
const valueOf = id => parseFloat(elementOf(id).value);
const elementTextOf = id => parseFloat(elementOf(id).innerText);
// depositing....>>
 elementOf('deposit').addEventListener('click', () => {
    const depositAmount = valueOf('deposit-amount');
    if (isNaN(depositAmount)){
        alert('please input a valid number')
    }
    else {
        elementOf('deposit-bank').innerText =elementTextOf('deposit-bank')+depositAmount;
        elementOf('balance-bank').innerText =elementTextOf('balance-bank')+depositAmount;
        elementOf('deposit-amount').value = '';
    }
})
// withdrawing
elementOf('withdraw-button').addEventListener('click', () => {
    const withdrawAmount = valueOf('withdraw-amount');
    if (withdrawAmount <= elementTextOf('balance-bank')) {
        console.log('get into first');
        elementOf('balance-bank').innerText = elementTextOf('balance-bank') - withdrawAmount;
        elementOf('withdraw').innerText = elementTextOf('withdraw') + withdrawAmount;
        elementOf('withdraw-amount').value = '';
    }
    else if (isNaN(withdrawAmount)){
        alert("Please input a Number")
        elementOf('withdraw-amount').value = '';
        
    }
    else if (withdrawAmount > elementTextOf('balance-bank')) {
        alert('Opps! Balance Low')
        elementOf('withdraw-amount').value = '';
    }
    else {
        console.log("get into else", withdrawAmount);
        elementOf('withdraw-amount').value = '';
        
    }
}
    
)

document.onkeydown =e=> {
    if(e.keyCode == 123) {
       return false;
    }
   
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }

   
   
  
        
        
    
   

    



   
    

    














