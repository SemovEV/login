const buts = document.querySelectorAll('.order');
const col_item = document.querySelector('.col_item');


buts.forEach( but => {
    but.addEventListener('click', addItem);
});


function addItem(){
    let col = Number(col_item.innerText);
    console.log(col);
    col++;
    col_item.innerText = col;
}