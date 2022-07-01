var cards = [
    {
        img : 'https://user72902.clients-cdnnow.ru/localStorage/news/7a/a4/51/11/7aa45111_resizedScaled_1020to574.jpg',
        name : 'Rolls-Royce',
        descrip : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis commodi fugit dolorem, aliquam sed impedit molestias dolor. Voluptate error fugit quibusdam, qui dolor eos illo cum enim laboriosam ipsa.',
        price : '20 000 000',
        count: 0
    },
    {
        img : 'https://www.autostat.ru/application/includes/blocks/big_photo/images/cache/000/093/519/d7c99968-670-0.jpg',
        name : 'Tesla',
        descrip : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis commodi fugit dolorem, aliquam sed impedit molestias dolor. Voluptate error fugit quibusdam, qui dolor eos illo cum enim laboriosam ipsa.',
        price : '30 000 000',
        count: 1
    },
    {
        img : 'https://www.avtovzglyad.ru/media/article/DFDFDF.jpg.740x555_q85_box-0%2C0%2C740%2C555_crop_detail_upscale.jpg',
        name : 'Lamborghini',
        descrip : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis commodi fugit dolorem, aliquam sed impedit molestias dolor. Voluptate error fugit quibusdam, qui dolor eos illo cum enim laboriosam ipsa.',
        price : '40 000 000',
        count: 2
    },
    {
        img : 'https://www.avtovzglyad.ru/media/article/vaz-2107.jpg.740x555_q85_box-109%2C70%2C1459%2C1080_crop_detail_upscale.jpg',
        name : 'ВАЗ 2107',
        descrip : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis commodi fugit dolorem, aliquam sed impedit molestias dolor. Voluptate error fugit quibusdam, qui dolor eos illo cum enim laboriosam ipsa.',
        price : '200 000',
        count: 3
    },
    // {
    //     img : 'https://user72902.clients-cdnnow.ru/localStorage/news/7a/a4/51/11/7aa45111_resizedScaled_1020to574.jpg',
    //     name : 'descrip_card',
    //     descrip : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis commodi fugit dolorem, aliquam sed impedit molestias dolor. Voluptate error fugit quibusdam, qui dolor eos illo cum enim laboriosam ipsa.',
    //     price : '20 000 000'
    // }

]


const brows_cards = document.querySelector('.cards');
for(var i = 0; i < cards.length; i++){
    var div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${cards[i].img}" alt="">
    <div class="descrip_card">
        <h2>${cards[i].name}</h2>
        <p class = "descrip">${cards[i].descrip}</p>
        <p class="price">Цена: ${cards[i].price} руб.</p>
        <div class="center">
            <button class="order">Заказать</button>
        </div>
    </div>`;
    brows_cards.appendChild(div);
}