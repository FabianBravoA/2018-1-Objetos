//Objeto: sirve para modelar datos. Tiene propiedades y valores.
//Constructor: en él se crean las instancias

class Gato{
    constructor(nombre, color, tamaño, pelaje, personalidad){
        this.nombre = nombre;
        this.color = color;
        this.tamaño = tamaño;
        this.pelaje = pelaje;
        this.personalidad = personalidad;
        this.juguetes = {
            ruidosos : [],
            molestosos : []
        };
    }
    pelearConOtroGato(otroGato){
        console.log("En esta esquina "+this.nombre+" y en la otra "+otroGato.nombre);
    }
    hacerMiau(){
        console.log("MIAU!, soy : "+this.nombre);
    }
    pedirComida(){
        if(this.tamaño == "grandota"){
            console.log("Dame mucha comida!");
        }else if(this.tamaño == "pequeño"){
            console.log("Dame comida!");
        }
    }
}

//INSTANCIAS DE OBJETO
let morry = new Gato("Morry", "calico", "grandota", "peluda", "demierda");
let mini = new Gato("Mini", "blanco y negro", "pequeño", "peludo", "señorito");


//El espíritu : 2.elevado(2);
class Numero{
    constructor(num){
        this.num = num;
    }
    elevado(otroNumero /*Es otra instancia de Numero*/){
        let respuesta = 1;
        for(let i = 0; i < otroNumero.num; ++i){
            respuesta *= this.num;
        }
        return new Numero(respuesta);
    }
    sumar(otroNumero){
        return new Numero(this.num + otroNumero.num);
    }
    restar(otroNumero){
        return new Numero(this.num - otroNumero.num);
    }
    //Solo con enteros
    multiplicacion(otroNumero){
       let respuesta = 0;
       for (let i = 0; i < otroNumero.num; i++) {
           respuesta = respuesta + this.num;   
       }
       return new Numero(respuesta);
    }

    //Dividir sin resto ni decimales
    dividir(otroNumero){
        //Gracias al test de Carolina
        if(otroNumero.num == 0){
            return new Numero(Infinity);
        }
        //tres.dividir(dos)
        let respuesta = 0;
        for(let resto = this.num;;respuesta++){
            resto -= otroNumero.num;
            if(resto < 0){
                break;
            }
        }

        return new Numero(respuesta);
    }
}

let cero = new Numero(0);
let uno = new Numero(1);
let dos = new Numero(2);
let tres = new Numero(3);
let infinito = new Numero(Infinity);

console.assert(uno.sumar(dos).num == tres.num);
console.assert(tres.restar(dos).num == uno.num);
console.assert(uno.multiplicacion(dos).num == dos.num);
console.assert(tres.multiplicacion(cero).num == cero.num);
console.assert(tres.sumar(uno).num == uno.sumar(tres).num);
console.assert(cero.sumar(uno).multiplicacion(dos).num == dos.num);
console.assert(uno.dividir(uno).num == uno.num);
console.assert(tres.dividir(dos).num == uno.num);
console.assert(tres.dividir(cero).num == infinito.num);

//Un objeto fome
let objetoFome = {

};

objetoFome.chiste = "Un chiste fome...";
//Hay que escribir un punto para que la ruta sea relativa
fetch("./users.json").then((usersResponse)=>{
    return usersResponse.json();
}).then((users)=>{
    console.log("Users > "+JSON.stringify(users[0].name));
    users[0] = {
        ...users[0], //Sumar todo lo que contiene user[0]
        progress : {
            percent : 100
        }
    };
    console.log("Users > "+JSON.stringify(users[0]));
});
