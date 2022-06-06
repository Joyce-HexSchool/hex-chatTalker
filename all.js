// 擇一按鈕 + 方案換數字
let productBtn = document.querySelectorAll('.product-btn-list button');
let product = [10000, 15000, 20000, 25000, "> " + 25000];
let person = document.querySelectorAll('.cost-number.person');
let number = document.querySelectorAll('.cost-number.number');
for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].onclick = function () {
        productBtn.forEach(productBtn => productBtn.classList.remove('active'));
        productBtn[i].classList.toggle('active');
        person.forEach(person => person.innerHTML = `${product[i]}<span>位</span>`);
        number.forEach(number => number.innerHTML = `${(i + 2) * 300}<span class="twd">TWD</span>`);
    }
}

// 摺疊選單
let collapse = document.querySelectorAll('.collapse');
for (let i = 0; i < collapse.length; i++) {
    collapse[i].onclick = function () {
        collapse[i].classList.toggle('show');
    }
}

// swiper 套件
const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    breakpoints: {
        335: {
            slidesPerView: 1
        },
        
        757:{
            slidesPerView: 2
        },

        1135:{
            slidesPerView: 3
        }
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});