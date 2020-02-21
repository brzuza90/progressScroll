function changeDot() {
    const heightS2 = $('.s2').offset().top;
    const heightS3 = $('.s3').offset().top;
    const heightS4 = $('.s4').offset().top;
    const scrollValue = $(window).scrollTop();
    // console.log(heightS2);
    // console.log(scrollValue)
    if (scrollValue < heightS2) {
        // $('nav li').not('.dot1').removeClass('active');
        $('.dot1').addClass('active');
        $('.dot2').removeClass('active');
    } else if (scrollValue < heightS3) {
        $('.dot1').removeClass('active');
        $('.dot3').removeClass('active');
        $('.dot2').addClass('active');
    } else if (scrollValue < heightS4) {
        $('.dot2').removeClass('active');
        $('.dot4').removeClass('active');
        $('.dot3').addClass('active');
    } else {
        $('.dot3').removeClass('active');
        $('.dot4').addClass('active');
    }

}
$(window).on('scroll', changeDot);