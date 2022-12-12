'use strict';


console.log('completed');

function ifChecked(){
    if(document.getElementById('completed').checked = true){
        console.log('ok');
        document.getElementById('completed').style.color = "blue";
    } else if(document.getElementById('completed').checked = false)  {
        console.log('not ok');
    }
}

function test(){
    if(document.getElementById('completed1').checked = true){
        document.getElementById('top').style.background = "blue";
    }
}
