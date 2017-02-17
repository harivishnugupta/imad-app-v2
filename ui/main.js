
var button=document.getElementById('counter');
button.onclick = function()
{
    
var request= new XMLHttprequest();
request.open('GET', 'http://harivishnugupta.imad.hasura-app.io/' , true);
request.send(null);

    request.onreadystatechange = fuction()
    {
        if (request.readystate === XMLHttprequest.DONE)
        if(requestStatus === 200)
        {
    var counting=0;
    counting+=1;
     var span = document.getElementById('count');
     span.innerHTML = counting.toString();  
    }
    }
}
