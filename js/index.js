$('.movie').slick({
    slidesToShow: 4,
    // dots: true,
    // centerMode: true,
    // centerPadding: '40px'
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 3,
                arrows: false
            }
        },
        {
            breakpoint: 970,
            settings:{
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})

$('.video').slick({
    slidesToShow: 2,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },

    ]
})

$('.actor').slick({
    slidesToShow: 4,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        },
        {
            breakpoint: 970,
            settings:{
                slidesToShow: 2,
                arrows: false
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
    ]
})