const svgT = document.getElementById('icon-tg');
const t = document.getElementById('tooltip-t');
const g = document.getElementById('tooltip-g');
const d = document.getElementById('tooltip-d');
const v = document.getElementById('tooltip-v');

svgT.addEventListener('mouseenter', (event) => {
    t.style.display = 'block';
    t.style.left = event.pageX + 'px';
    t.style.top = event.pageY + 'px';
    g.style.display = 'block';
    g.style.left = event.pageX + 'px';
    g.style.top = event.pageY + 'px';
    d.style.display = 'block';
    d.style.left = event.pageX + 'px';
    d.style.top = event.pageY + 'px';
    v.style.display = 'block';
    v.style.left = event.pageX + 'px';
    v.style.top = event.pageY + 'px';
});

svgT.addEventListener('mousemove', (event) => {
    t.style.left = event.pageX + 'px';
    t.style.top = event.pageY + 'px';
    g.style.left = event.pageX + 'px';
    g.style.top = event.pageY + 'px';
    d.style.left = event.pageX + 'px';
    d.style.top = event.pageY + 'px';
    v.style.left = event.pageX + 'px';
    v.style.top = event.pageY + 'px';
});

svgT.addEventListener('mouseleave', () => {
    t.style.display = 'none';
    g.style.display = 'none';
    d.style.display = 'none';
    v.style.display = 'none';
});