//Scope (räckvidd)

console.log('-----------------Lokala variabler-----------------');


//Lokala variabler
{
     let x = 10;
     console.log('x = ' + x);
}

  //console.log(x); // ReferenceError: e is not defined

{
    var y = 10;
    console.log('y = ' + y);
}
console.log('y = ' + y);

console.log('----------------------------------------------------------');

// Variabler inne ifunktioner är alltid lokala
function demo(){
       var local_1 = 1;
       var local_2 = 2;
       console.log(local_1);
       console.log(local_2);
       
    }
    demo();
    
    // Att skriva ut lokala variabler utanför funktionen ==> ERROR

// function demo(){
//        let a1 = 1;
//        let b1 = 2;
       
//     }
//     demo();
    // console.log(a1); //ReferenceError
    // console.log(b1); //ReferenceError
   
    console.log('-----------------Grobala variabler-----------------');
    
    //Globala variabler(The global scope)
    
    var global_1 = 10;
    let global_2 = 20;
    console.log(global_1);
    console.log(global_2);
    
    
    console.log('-----------------Grobala och Lokala variabler-----------------');

    var global_3 = 'En global variabel';

    function demo2(){
        var local_3 = 'En lokal variabel';
        //OBS! Om du glömmt 
        console.log(local_3); // En lokal variabel
    }
    demo2(); 
    //console.log(local_3); RefferenceError: local_3 is not defined

    console.log(global_3); // En global variabel