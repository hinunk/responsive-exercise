/**
 * Created by 52699 on 2017/5/13.
 */
$(function () {
    // 轮播
    var swiper = new Swiper('#siteBanners', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });

    var swiper2 = new Swiper('#albumSlides', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 0,
        grabCursor: true
    });
});

//滚动
$(document).on('click', 'a', function (event) {
    event.preventDefault();

    let anchor = $.attr(this, 'href')
    let top = $(anchor).offset().top
    $('html, body').animate({
        scrollTop: top
        // scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);


});
//返回顶部
$('#goToTop').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
})

//navFixed
$(window).on('scroll', function () {
    var top = $('body').scrollTop()
    if (top > $('#topbar').outerHeight()) {
        $('#topbar').addClass('sticky')
    } else {
        $('#topbar').removeClass('sticky')
    }
})

//canvas
$('#canvas').on('touchstart', (e) = > {
    let {pageX, pageY} = e.originalEvent.touches[0]

})
