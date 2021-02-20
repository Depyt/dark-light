var file = document.querySelector('link[href]');
var button = document.querySelector('#change');


button.addEventListener('click', function(){
 if(file.attributes[1].value == '20.02.css'){
     file.attributes[1].value = '20.02.dark.css'
 }else if(file.attributes[1].value == '20.02.dark.css'){
     file.attributes[1].value = '20.02.css'
 }
    
});