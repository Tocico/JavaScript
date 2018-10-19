//Arbeta med inbyggda globala JS-objekt

// Objektet string

let firstName = 'Toshiko';
console.log(typeof firstName); // typen är string


let antal = firstName.length;
console.log(antal); //7

//KOnvertera till gemener 
firstName.toLowerCase();
console.log(firstName);
// OBS!Original string ändras inte. Vi måste lagra resultatet
// String är immutable därför ändras inte 


firstName = firstName.toLowerCase(); 
console.log(firstName);

firstName = firstName.toUpperCase();
console.log(firstName);

// Konkatenering. Man kan sätta ihop
let lastName = 'Kuno';
let fullName = firstName.concat(' ',lastName);

//let fullName = firstName +''+ lastName; 
console.log(fullName);

//Substring substring(start, end)
console.log(fullName.substring(0,6)); //TOSHIK
console.log(fullName.substring(7)); //Kuno
//Leta efter första mellanslaget
let space = fullName.indexOf(' ');
console.log(space);
console.log(fullName.substring(space+1)); // +1 gör ta bort första mellanslaget 

// substr() ange start och slut
//'TOSHIKO Kuno'
console.log(fullName.substr(8,4)); // kuno

// Sträng i JS indexeras som samma sätt som arrayer
console.log(fullName[0]);

//Skriv ut sista tecken
console.log(fullName[fullName.length-1]);


let arreyT = [1,2,3];
console.log(arreyT.length);
//Skriv ut sista element i arrayen 
console.log(arreyT[arreyT.length-1]);

// Skriv ut index på första mellanslaget
console.log(fullName.indexOf(' ')); //7
//Skriv ut index på första mellanslaget
console.log(fullName.lastIndexOf(' ')); //7

let newName = 'Kalle Anka ';
console.log(newName.indexOf(' ')); //5
console.log(newName.lastIndexOf(' ')); //10

console.log(fullName);
console.log(fullName.charAt(1)); //O

//split() retunerar array
let nameArray = fullName.split();
console.log(nameArray); //['TOSHIKO kuno']

nameArray = fullName.split(''); //OBS! en tom sträng [ 'T', 'O', 'S', 'H', 'I', 'K', 'O', ' ', 'K', 'u', 'n', 'o' ]
console.log(nameArray);

nameArray = fullName.split(' '); //OBS! mellanslag [ 'TOSHIKO', 'Kuno' ]
console.log(nameArray);

nameArray = fullName.split('O'); //OBS! [ 'T', 'SHIK', ' Kuno' ]
console.log(nameArray);
console.log(fullName.split('K')); //OBS! ['TOSHI', 'O ', 'uno' ]
console.log(nameArray); 

fullName = 'Toshiko;kuno';
nameArray = fullName.split(';');
console.log(nameArray); //[ 'Toshiko', 'kuno' ]

fullName = 'Toshiko|kuno';
nameArray = fullName.split('|');
console.log(nameArray); //[ 'Toshiko', 'kuno' ]


fullName = '  Toshiko   kuno  ';
nameArray = fullName.trim();
nameArray = fullName.split(' ');
console.log(nameArray); //[ '', '', 'Toshiko', '', '', 'kuno', '', '' ]

//Chaining. En sats istället för två föregående satser
fullName = ' taeko kuno '
nameArray = fullName.trim().split(' ');
console.log(nameArray);

// Rensa alla mellanslag men behåll ett
fullName = '  Toshiko   kuno  ';
console.log(fullName);
nameArray = fullName.replace(/ +/g,' '); // RegExp(överkurs)
console.log(nameArray);
fullName = 'Toshiko Kuno';
console.log(fullName.replace('Toshiko','Taeko'));

/* fullName = 'Toshiko;Kuno';
// Byt ut ; mot mellanslag
fullName.replace(/ +/g,' ');
console.log(fullName); */

//Escape-tecken
// \n new line
// \" för att visa " i en sträng
// \t visar en tab OBS! tab funkar inte i webbläsare
console.log('Hej\nVälkommen till \"JS\"\n\nIdag har vi jobbat med string\n\n');
console.log('Hej och välkommen till \'JS\'');
console.log('name\tE-post');
console.log('toshiko\tkuno');
console.log('toshiko\\'); // med dubbla \
