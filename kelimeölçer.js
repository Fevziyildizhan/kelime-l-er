<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uzunluk Ölçme</title>
    <style type="text/css">
    body{
        background-color: #333232;
    }
    h1{
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;

    }
    #container{
        height: 125px;
        width: 350px;
        border: 1px solid black;
        background-color: #985194;
        margin: auto;
    }
    #word{
        margin-left: 10px;
    }
    #output{
        height: 25px;
        width: 330px;
        background-color: white;
        margin: 25px auto;
        padding-left: 5px;
        font-size: 24px;
    }
    </style>
</head>
<body>
    
<h1>Uzunluk Ölçme</h1>
<div id="container">
    <input type="text" id="word" placeholder="kelime yada cümle gir">
    <button id="btn">HESAPLA</button>
    <div id="output"></div>
</div>



    <script src="uzunluk ölçme.js" type="text/javascript"></script>
</body>
</html>

//JS
let btn = document.getElementById('btn')
let output = document.getElementById('output')


btn.addEventListener('click',function(){

    let str = document.getElementById('word').value
    output.innerHTML = str.length
})
