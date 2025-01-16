const svgD = document.getElementById('icon-ds');
const d = document.getElementById('tooltip-d');

svgD.addEventListener('mouseenter', (event) => {
    d.style.display = 'block';
    d.style.left = event.pageX + 'px';
    d.style.top = event.pageY + 'px';
});

svgD.addEventListener('mousemove', (event) => {
    d.style.left = event.pageX + 'px';
    d.style.top = event.pageY + 'px';

});

svgD.addEventListener('mouseleave', () => {
    d.style.display = 'none';
});