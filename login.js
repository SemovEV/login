const but = document.querySelector('.login_enter');
const inputs = document.querySelectorAll('.input');
const alert = document.querySelector('.alert');

but.addEventListener('click', () => {    
    for(var i = 0; i < users.length; i++){
        if(inputs[0].value == users[i].login && inputs[1].value == users[i].password){
            window.location.href = './index.html';
        }else{
            alert.style.opacity = '1';
        }
    }
})