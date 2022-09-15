const element = (id) => document.getElementById(id);
const valueOf = (id) =>element(id).value;
element('login-button').addEventListener('click',()=> {
    if (valueOf('email') == 'marufraju@gmail.com' && valueOf('password') == 'asdfasdf') {
       window.location.href='banking.html'
    }
    else {
        alert('Wrong Password or Email')
    }
})

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







   
