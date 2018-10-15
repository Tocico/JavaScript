//Arbeta med JSs globala objekt


//Varning Problem med var
/* 
   Om du deklarerar variabler som
   råkar ha samma namn som objektets egenskaper
   då skriver du över dessa egenskaper.
   Lösning : använd let istället
*/

let innerWidth = 100;
let innerHeight = 200;

function demo(){

    console.log(this.innerWidth + 'px');
    console.log(this.innerHeight + 'px');
    // this pekar på ett objekt som heter Window(i webbläsare)
}
//demo();

//Två bra metoder i objektet Window