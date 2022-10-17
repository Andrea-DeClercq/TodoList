//SELECTEURS
let inputElement = document.querySelector('input');
let listElement = document.querySelector('ul')

let taskList = [
    'bonjour',
    'au revoir',
];
//ECOUTEURS

//FUNCTIONS
 function populateList(){
    taskList.forEach(function(item){
        let newItem = document.createElement('li')

        //add span for text
        
        let span = document.createElement('span');
        span.innerHTML = item;
        newItem.appendChild(span)
    })
 }

 populateList()