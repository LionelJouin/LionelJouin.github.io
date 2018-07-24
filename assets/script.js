var something = document.getElementById('canvasSection');
var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
});
something.appendChild(pattern.canvas())