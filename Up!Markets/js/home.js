 window.addEventListener('load', function(){
     new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: '4',
                slidesToScroll: '4',
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 2,
              }
            }
          ]
     })
 })