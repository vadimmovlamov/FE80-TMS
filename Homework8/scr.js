function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

new Swiper('.swiper-container', {
    // Вывод стрелок навигации
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    // Вывод скроллбара
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
})