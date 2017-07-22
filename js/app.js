$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

//Login and Signup


// Name and Password from the register-form
var regName = document.getElementById('regName');
var regPw = document.getElementById('regPw');
var auth = document.getElementById('authMessage');

// storing input from register-form
function store() {
    localStorage.setItem('regName', regName.value);
    localStorage.setItem('regPw', regPw.value);
    auth.innerHTML = 'Registered Successfull'
    regName.value='';
    regPw.value='';
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('regName');
    var storedPw = localStorage.getItem('regPw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if(userName.value == storedName && userPw.value == storedPw) {
            auth.innerHTML = 'Login Successfull'
       window.location.href = "selection.html"
    }else {
        alert('enter correct Id or password');
}
} 