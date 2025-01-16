const svgT = document.getElementById('icon-tg');
const t = document.getElementById('tooltip-t');

svgT.addEventListener('mouseenter', (event) => {
    t.style.display = 'block';
    t.style.left = event.pageX + 'px';
    t.style.top = event.pageY + 'px';
});

svgT.addEventListener('mousemove', (event) => {
    t.style.left = event.pageX + 'px';
    t.style.top = event.pageY + 'px';

});

svgT.addEventListener('mouseleave', () => {
    t.style.display = 'none';
});