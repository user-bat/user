const svgG = document.getElementById('icon-gt');
const g = document.getElementById('tooltip-g');

svgG.addEventListener('mouseenter', (event) => {
    g.style.display = 'block';
    g.style.left = event.pageX + 'px';
    g.style.top = event.pageY + 'px';
});

svgG.addEventListener('mousemove', (event) => {
    g.style.left = event.pageX + 'px';
    g.style.top = event.pageY + 'px';

});

svgG.addEventListener('mouseleave', () => {
    g.style.display = 'none';
});