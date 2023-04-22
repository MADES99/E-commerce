const thumbnailEl = document.querySelectorAll('.thumbnail-product');
const increaseEl = document.querySelector('.increase');
const decreaseEl = document.querySelector('.decrease');
const qtyNum = document.getElementById('qtyNum')
const cart = document.getElementById('cart');
const cartList = document.querySelector('.cart-list');
const addButton = document.getElementById('add');
const itemNumber = document.querySelector('.itemNumber');
const emptyReply = document.getElementById('empty-reply');
const cartItems = document.querySelector('.cart-items');
const addedItems = document.querySelector('.addedItems');
const close = document.getElementById('close');
const lightBox = document.getElementById('light-box');
const store = document.getElementById('store');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const lightProductContainer = document.querySelector('.light-product-container');
const lightImages = document.querySelectorAll('.lightimage');

let change = 0;
next.addEventListener('click', () => {
    change++;
    previous.style.backgroundColor = '#fff';


    if (change > lightImages.length - 1) {
        change = lightImages.length - 1;
        next.style.backgroundColor = 'hsl(26, 100%, 55%)';
    }

    lightProductContainer.style.transform = 
    `translateX(${-change * 500}px)`;
})

previous.addEventListener('click', () => {
    change--;
    next.style.backgroundColor = '#fff';

    if (change < 0) {
        change = 0;
        previous.style.backgroundColor = 'hsl(26, 100%, 55%)';
    }

    lightProductContainer.style.transform = 
    `translateX(${-change * 500}px)`;
  
})





store.addEventListener('click', () => {
    lightBox.style.transform = 'scale(1)'
})

close.addEventListener('click', () => {
    lightBox.style.transform = 'scale(0)'
})


let lists = [];




const liEl = document.createElement('li');
liEl.classList.add('added-to-cart')

const img = document.createElement('div');
liEl.appendChild(img)

const productDes = document.createElement('div')
productDes.classList.add('productDes')
productDes.innerHTML = `<h4>Fall Limited Edition Sneakers</h4>`

const amount = document.createElement('h4');
amount.classList.add('amount');
productDes.appendChild(amount)
liEl.appendChild(productDes)


const remove = document.createElement('div')
remove.innerHTML = `<img src="images/icon-delete.svg" alt="delete" class="remove">`
liEl.appendChild(remove)


remove.addEventListener('click', () => {
    liEl.remove()
    itemNumber.style.display = 'none'
    addedItems.style.display = 'none';
    emptyReply.style.display ='block';
})



cart.addEventListener('click', () => {
    cartList.classList.toggle('show')
    if(itemNumber.style.display == 'block') {
        emptyReply.style.display ='none';
        addedItems.style.display = 'block'
    } else {
        emptyReply.style.display ='block';
        addedItems.style.display = 'none'
    }
   
})

add.addEventListener('click', () => {
    itemNumber.innerText = qtyNum.innerText;
    if (qtyNum.innerText == 0) {
        itemNumber.style.display = 'none';
    } else {
        itemNumber.style.display = 'block';
    } 

    let answer = eval(+qtyNum.innerText * 125.00);

    amount.innerHTML = `<span>&#36</span>125.00 x ${qtyNum.innerText} <i id="total"><span >&#36</span>${answer}</i>`

    lists.push(liEl)
    cartItems.appendChild(liEl)

    console.log(cartItems)
  
})

let count = 0;
increaseEl.addEventListener('click', () => {
    count++;

    if (count <= 10) {
        qtyNum.innerText = `${count}`;
    }
})

decreaseEl.addEventListener('click', () => {

    if (qtyNum.innerText > 0) {
        count--;
        qtyNum.innerText = `${count}`;
    } 
    
})



thumbnailEl.forEach((thumb, idx) => {
    thumb.addEventListener('click', () => {
        img.innerHTML = `<img src="images/image-product-${idx + 1}-thumbnail.jpg" alt="thumbnail-product-${idx + 1}" class="added-product">`

        thumb.style.opacity = 1;
        thumb.style.border = '2px solid orange'
        count = 0;
        qtyNum.innerText = 0;

    })

    thumb.addEventListener('mouseleave', () => {
        thumb.style.opacity = 0.5;
        thumb.style.border = 'none'
    })

    thumb.addEventListener('mouseover', () => {
        thumb.style.opacity = 0.3;
    })



   
})









