// Skapa ett objekt som beskriver en bill enligt övningenunder lektion 7

let car = {
      //Egenskaper
      name     : 'Fiat',
      model    : '500',
      weight   : '850kg',
      color    : 'white',

    // Metoder (method)
      start  : function(){ console.log("start...");
               return "I will start";
      },
      drive  : function(){console.log('drive...');
      },
      brake  : function(){console.log('Brake...');
      },
      stop   : function(){console.log('stio...');
      },


};

console.log(car.name);
console.log(car.start()); //start...  I will start
car.start(); // Brake...
console.log(car.brake()); //undefined
// return を書くか、 car.brake(); と書く

