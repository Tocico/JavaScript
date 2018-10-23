function Recept(titel,howTo){
     this.titel = titel;
     this.howTo = howTo;
     this.ingredienser = [];
}

let onigiri = new Recept('onigiri','1: Koka ris  2....');
let dumplig = new Recept('Dumpling', '1,mixa fläskkött och grönsaker..');

// Ingredienser
onigiri.ingredienser = ['ris','nori'];
dumplig.ingredienser = ['fläskkött','grönsaker'];

let allaRecept = [onigiri,dumplig];

console.log(allaRecept);



let n = 123.45678;
console.log(n.toExponential(2));
console.log(n.toExponential(3));

let a = 1.4;
console.log(Math.round(a));