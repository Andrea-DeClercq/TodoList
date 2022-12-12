

function add_removeClass(elem) {
    if ( document.getElementById("Todo").classList.contains("destroyed")) {
        document.getElementById("Todo").classList.remove("destroyed");  
    }
    else{
        elem.className="destroyed"
    }
   
}