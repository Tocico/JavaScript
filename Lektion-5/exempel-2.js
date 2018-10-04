//<<<aritmetiska operatorer i JS

let y = 5 ;
let x;

x = y + 2; //7
x = y - 2; //3
x = x + 2; //5
x = x - 2; //3
x = y * 2; //10
x = x * 2; //20
x = y / 2; //2.5 OBS! ej ,komma
x = y % 2; //1 är resten vid heltalsdividition
x = 10 % 3; //1
x = 7 % 5; //2
x = 5 % 7; // 余りの数は5 

// Ökningsoperator
x = 10;
x++; // öka alltid med ett
++x;
x++;
// öka med två
x = x + 2;
//eller
x += 2; // Lägg till 2
x += 5; // Lägg till 5

//Minskningsoperator
x = 10;
x--; //9  Minska med ett
x = x - 2; //7
x -= 2; //5 Minska med två

//
x = "TEXT";
x = x / 2; // Nan(Not a number)
x = 2 / x;


console.log(x);