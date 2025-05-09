window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.panel-setting');
    if (this.window.pageYOffset > 40) {
        scrollTopButton.style.width = '100%';
        scrollTopButton.style.marginLeft = '0%';
        scrollTopButton.style.marginTop = '0%';
        scrollTopButton.style.borderRadius = '0px';
        scrollTopButton.style.height='2.75rem';
        scrollTopButton.style.boxShadow='0 5px 10px var(--panel-bg-color)'
        scrollTopButton.style.filter='opacity(0.75)'
        scrollTopButton.Style.background='#000000'

    } else {
        scrollTopButton.style.width = '70%';
        scrollTopButton.style.marginLeft = '15%';
        scrollTopButton.style.marginTop = '1%';
        scrollTopButton.style.borderRadius = '15px';
        scrollTopButton.style.height='2.5rem';
        scrollTopButton.style.boxShadow='0 0px 5px var(--panel-bg-color)'
        scrollTopButton.style.filter='opacity(1)'

    }
});
