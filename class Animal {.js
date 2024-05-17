class Animal {
    comer () {
        console.log("El animal come");
    } 
    dormir () {
        console.log("El animal duerme");
    }
}

class Perro extends Animal {
    Ladrar () {
        console.log("El perro ladra");
    }
    comer () {
        console.log("El perro come pienso");
    }
}

let animal1 = new Animal();
let perro1 = new Perro();
animal1.comer();
animal1.dormir();

perro1.comer();
perro1.dormir();
perro1.Ladrar();