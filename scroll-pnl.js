window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.panel-setting');
    if (this.window.pageYOffset > 0) {
        scrollTopButton.style.width = '100%';
        scrollTopButton.style.marginLeft = '0%';
        scrollTopButton.style.marginTop = '0%';
        scrollTopButton.style.borderRadius = '0px';
        scrollTopButton.style.height='4rem';
    } else {
        scrollTopButton.style.width = '50%';
        scrollTopButton.style.marginLeft = '25%';
        scrollTopButton.style.marginTop = '1%';
        scrollTopButton.style.borderRadius = '20px';
        scrollTopButton.style.height='3rem';
    }
});