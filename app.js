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







   