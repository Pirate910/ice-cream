new Swiper('.clients-info-slider', {
  //Стрелки
  navigation: {
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },

  //Кнопки переключения слайда

  pagination: {
    el: '.slider-selector-row',
    //Кликабельная функция
    clickable: true,
    //Динамическая кнопка
  },

});
