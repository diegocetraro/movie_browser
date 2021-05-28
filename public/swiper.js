//Swiper API
const swiper = new Swiper('.swiper-container',{
    //Optional Parameters
    direction: 'horizontal', //If you want to specify the direction of the swiper (Horizontal / Vertical)
    loop: true, //True or false, looping through the swiper

    //If we need pagination bullets
    pagination: {
        el: '.swiper-pagination'
    },

    //Navigation Arrows
    navigation: {
        nextE1: '.swiper-button-next',
        prevE2: '.swiper-button-prev',
    },

    //And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    }
})