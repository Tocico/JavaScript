/* // Deklarera en funktion
hej();  // Vi får anropa 

function hej(){
    alert('Hej från en funktion!');
}

//hej2(); //Fel! Vi får inte anropa anonyma fuktioner före funktionsuttrycket

// Anonyma funktioner (saknar namn)
let hej2 = function(){     // !OBS Vi måste ha parenteser
    alert('Hej från en anonym funktion');
}
// Detta kallas att ska ett uttyck med hjälp av en funktion
// Function Expression
 */
function meddelande(){
     console.log('Jag har anropats!');
}

meddelande();
meddelande();
meddelande();
