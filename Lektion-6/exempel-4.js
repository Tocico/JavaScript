// Funktion med return

function fullName1 (firstName, lastName){
    let name;
     name = firstName + ' ' + lastName;
    return name;
    }
 // OBS! Funktionen returnerar en sträng

         function fullName2 (firstName, lastName){
          
              // Snnabare och proffsigare ( Clean code)
              return firstName + ' ' + lastName;
         
         }

         let name1 = fullName1("Toshiko","Kuno");
         console.log('Hej' + name1);

         //Eller skriv ut direkt
         console.log('Hej' + fullName2("Kalle", "Anka"));


 // Arbeta med IIFE 

 (function() {
    console.log('Jag är en IIFE');
    })();
    
    
    let result = (function msg () {
       return 'Jag är en IIFE-2';
       })();

       console.log(result);

       let result2 = function (){
            return  "Jag är en IIFE-3";
        }
        console.log(result2); // Hela funktionen returneras


        // Utan IIFE
                    function myFun (msg){
                         return msg = "Jag är en IIFE-4";
                    }
                     
                    console.log(myFun(msg));