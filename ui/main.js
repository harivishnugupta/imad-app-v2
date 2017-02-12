console.log('Loaded!');
var change= document.getElementById('details');
change.innerHTML = 'changed value';
var moving = document.getElementById('toypic');
moving.onclick = function()
{
    leftmargin = leftmargin + 5;
    leftmargin = leftmargin + px;
};
