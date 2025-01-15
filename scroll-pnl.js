window.addEventListener('scroll', function () {
    var scrollTopButton = document.querySelector('.panel-setting');
    if (this.window.pageYOffset > 25) {
        scrollTopButton.style.width = '5%';
        scrollTopButton.style.marginLeft = '90%';
        scrollTopButton.style.marginTop = '1%';
        scrollTopButton.style.borderRadius = '5px';
        scrollTopButton.style.height='10rem';
        scrollTopButton.style.boxShadow='0 5px 10px var(--panel-bg-color)'
        scrollTopButton.style.filter='opacity(0.90)'
        scrollTopButton.style.display='grid'
    } else {
        scrollTopButton.style.width = '50%';
        scrollTopButton.style.marginLeft = '25%';
        scrollTopButton.style.marginTop = '1%';
        scrollTopButton.style.borderRadius = '15px';
        scrollTopButton.style.height='3rem';
        scrollTopButton.style.boxShadow='0 0px 5px var(--panel-bg-color)'
         scrollTopButton.style.filter='opacity(1)'
         scrollTopButton.style.display='flex'
    }
});