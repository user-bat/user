window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.panel-setting');
    if (this.window.pageYOffset > 10) {
        scrollTopButton.style.width = '100%';
        scrollTopButton.style.marginLeft = '0%';
        scrollTopButton.style.marginTop = '0%';
        scrollTopButton.style.borderRadius = '0px';
        scrollTopButton.style.height='3.5rem';
        scrollTopButton.style.boxShadow='0 5px 10px var(--panel-bg-color)'
        scrollTopButton.style.filter='opacity(0.90)'
    } else {
        scrollTopButton.style.width = '50%';
        scrollTopButton.style.marginLeft = '25%';
        scrollTopButton.style.marginTop = '1%';
        scrollTopButton.style.borderRadius = '12px';
        scrollTopButton.style.height='3rem';
        scrollTopButton.style.boxShadow='0 0px 5px var(--panel-bg-color)'
         scrollTopButton.style.filter='opacity(1)'
    }
});