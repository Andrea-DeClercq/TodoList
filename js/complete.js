'use strict';


console.log('completed');

function updateAddListener(){
    let list = document.querySelectorAll('.todo-list-item');
    list.forEach(e => {
        // Remove event listener to prevent multiple event listeners
        e.removeEventListener('click', ()=>{});

        e.addEventListener('click', () => {
            if(e.classList.contains("checked")){
                e.classList.remove('checked');
            }
            else{
                e.classList.add('checked');
                e.list.color = "blue";
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    let input = document.querySelector('.new-todo');
    
    input.addEventListener('keypress', function(e) {
        if(e.keyCode === 13){
            updateAddListener();
        }
    });
})

function clearTask(){
    console.log("Fonction appele")
    document.querySelectorAll('checked')
}