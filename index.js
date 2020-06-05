var getData = function(){
    var name = document.getElementById("name").value;
    var lastName = document.getElementById('lastName').value;
    console.log()
    document.getElementById("end").innerHTML = `La penultima letra de tu nombre es "${name.charAt(name.length -2)}" y la de tu apellido es "${lastName.charAt(lastName.length -2)}"`;
}


