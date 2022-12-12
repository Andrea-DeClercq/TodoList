//let valeur = document.getElementById('input').value;

function newItem(){
    var li = document.createElement('li');
    var input = document.getElementById('input').value;
    var text = document.createTextNode(input);

    //console.log("Cc")

    console.log(input)

    li.appendChild(text);
    if (input == ""){
        console.log("Remplir le champ");
        alert('Vous devez remplir le champ');
    } else{
        document.getElementById("myUl").appendChild(li)
    }
    document.getElementById('input').value = "";

}


function clearItem(){
    
}