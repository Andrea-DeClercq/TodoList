// Script JS pour todolist

// Test

function clearCompleted(){
    for(i = 0; i < todo.lenght; i ++){
        if (document.getElementById("toggle").checked == true){
            todo.splice(i, 1);
        }
    }
}


