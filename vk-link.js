const svgV = document.getElementById('icon-vk');
const V = document.getElementById('tooltip-v');

svgV.addEventListener('mouseenter', (event) => {
    V.style.display = 'block';
    V.style.left = event.pageX + 'px';
    V.style.top = event.pageY + 'px';
});

svgV.addEventListener('mousemove', (event) => {
    V.style.left = event.pageX + 'px';
    V.style.top = event.pageY + 'px';

});

svgV.addEventListener('mouseleave', () => {
    V.style.display = 'none';
});