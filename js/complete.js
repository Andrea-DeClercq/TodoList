'use strict';

let checked = document.querySelector('#completed:checked') !== null;
console.log('completed');
document.getElementsByClassName('view').onclick = function(){
    ifChecked(checked);
}

function ifChecked(checked){
    if (checked === null){
        console.log('pas check');
    } else {
        console.log('checked');
    }
}
