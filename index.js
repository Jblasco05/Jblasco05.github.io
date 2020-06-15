const mayoriaDeEdad = 18;
var name;
var age;

function calculandoEdad() {
    name = document.getElementById('name').value;
    age = parseFloat(document.getElementById('age').value);
    FuncionConEdad()
}

const FuncionConEdad= () => {
    if (age < mayoriaDeEdad) {
        document.getElementById('end').innerHTML = `Hola ${name} lo lamentamos pero aun no eres mayor de edad vuelve cuando tengas ${mayoriaDeEdad}`
    }
    else if (age === mayoriaDeEdad) {
        document.getElementById('end').innerHTML = `Hola ${name} justo tienes ${mayoriaDeEdad} Ya puedes ingresar.`
    }
    else {
        document.getElementById('end').innerHTML =`Hola ${name} Bienvenido.`
    }
}