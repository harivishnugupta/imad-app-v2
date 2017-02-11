var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles={ 
    ArticleOne :{
        title:'ArticleOne',
        heading:'will see the comtent of artical one',
        date:'feb-11,2017',
        content:'<p>wanga, wandhu article one oda content ah padeenga</p>'
    },
    ArticleTwo :{
        title:'ArticleTwo',
        heading:'will see the content of article Two',
        date:'feb-11,2017',
        content:'<p>wanga, wandhu article Two oda content ah padeenga</p>'
    },
    ArticleThree :{
        title:'ArticleThree',
        heading:'will see the comtent of article Three',
        date:'feb-11,2017',
        content:'<p>wanga, wandhu article three oda content ah padeenga</p>'
    }
};
    function CreateTemplate(data)
    {
        var title = data.title;
        var heading = data.heading;
        var date = data.date;
        var content = data.content;
    var HtmlTemplate=
        `
        <html>
            <head>
                 ${title}
                     <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                    <a href='/'>Home</a>
                    </div>
                    <hr/>
                    <h1>
                         ${heading}
                    </h1>
                    <div>
                         ${date}
                    </div>
                    <div>
                         ${content}
                    </div>
                </div>
            </body>    
        </html>
        `;
        return HtmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:occurence', function (req, res) {
    var occurence=req.params.occurence;
  res.send(CreateTemplate(Articles[occurence]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
