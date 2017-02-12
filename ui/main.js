console.log('Loaded!');
var change= document.getElementById('details');
change.innerHTML = 'changed value';
var moving = document.getElementById('toypic');
var movingright= function()
{
    marginLeft = marginLeft = 10;
    movingright.style.marginLeft = marginLeft + 'px';
}
moving.onclick = function()
{
    var interval = setInterval(movingright,50);
 };
