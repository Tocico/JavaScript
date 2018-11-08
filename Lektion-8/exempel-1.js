// Arbeta med konstruktorer

// Skapa ett nytt objekt med hjälp av en konstruktor
let toshiko = new Object();
//Egenskaper
toshiko.name = 'TOshiko kuno';
toshiko.age = 29;

//Metoder
toshiko.info = function(){
    console.log(this.name + this.age);
}

// En metod som returnerar en sträng
toshiko.info = function(){
    return `${this.name}  ${this.age} år gammal`;
}

// Använd objektets egenskaper
console.log(toshiko.name);

// Använd objektets metoder
toshiko.info();
// console.log(toshiko.info()); Undefined

//console.log(toshiko2.info());
console.log(toshiko);