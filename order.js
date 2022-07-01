const buts = document.querySelectorAll('.order');
const col_item = document.querySelector('.col_item');
var array = [];

buts.forEach( but => {
    but.addEventListener('click', addItem);
});


function addItem(event){
    for(var i = 0; i < buts.length; i++){
        if(event.target == buts[i])
            array.push(i)
            localStorage.setItem('order', JSON.stringify(array))
    }
    let col = Number(col_item.innerText);
    col++;
    col_item.innerText = col;
}