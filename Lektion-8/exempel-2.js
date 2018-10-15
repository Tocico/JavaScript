// Skapa egna konstruktorer (Constructors)

// Skapa en blueprint (ritning) på en helt ny grej t.ex. personer,bilar osv

//Exemopel - Skapa en konstruktor som beskriver en person
//Person blir en ny typ(prototyp)
function Person(name,age){ 
this.name = name;  // this.name är egenskap 
this.age = age;
this.children = [];
}

// Skapa flera objekt av Person() = skapa nya instanser
let toshiko = new Person('TOshiko', 29); // Vi kan inte använda{}
let taeko = new Person('Taeko',27);

//toshiko och taeko blir två nya referenser till två olika objekt

// Ändra egenskaper med punktnotation (dot notation)
toshiko.age = 20;

//Lägg till egenskaper
toshiko.height = 161;

// Skapa en array av ett antal objekt
let kuno =[toshiko,taeko];
// Visa info om det första objektet
console.log(kuno[0].name);

kuno[0].name = 'Hitoshi';
console.log(kuno[0].name);

delete kuno[0].name;

console.log(kuno);

//Objekt kan innehåller arrayer
//toshiko.children = [];

taeko.age = '24';
toshiko.children.push(taeko);
console.log(toshiko);