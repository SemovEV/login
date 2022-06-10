const h1 = document.querySelector('h1');

// console.log(localStorage.getItem('user'));
if (localStorage.getItem('user') != null){
    h1.innerText += localStorage.getItem('user');
}else{
    h1.innerText += 'Странник';
}