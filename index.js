const edadCalculo = 30;

function calculandoEdad() {
    var name = document.getElementById('name').value;
    var age = parseFloat(document.getElementById('age').value);

    if (age < edadCalculo) {
        document.getElementById('end').innerHTML = `tu nombre es ${name} y te faltan ${edadCalculo - age} años para cumplir ${edadCalculo}`
    } 
    else if ( age == edadCalculo) {
        document.getElementById('end').innerHTML = `tu nombre es ${name} y tienes ${edadCalculo} años de edad`
    } 
    else {
        var respuesta
        if ((age-edadCalculo)==1){
            respuesta = `año`
        }
        else {
            respuesta = `años`
        }
        
        document.getElementById('end').innerHTML = `tu nombre es ${name} y cumpliste ${edadCalculo} años hace ${age - edadCalculo} ${respuesta}`
    }
}