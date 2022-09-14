document.getElementById('login-button').addEventListener('click', function () {
    const userMail = document.getElementById('email').value;
    const userPass = document.getElementById('password').value;
    if (userMail == 'marufraju@gmail.com' && userPass == 'asdfasdf') {
       window.location.href='banking.html'
    }
    else {
        alert('wrong password or mail')
    }
})







   