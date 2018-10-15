// Övning1

let nackademin = {
      course   : 'frontend',
      teacher  :  'Mahmud',
      school   :  'Nackademin',
      period   :  '2 years'
};

console.log(nackademin);
console.log(nackademin.teacher);


function change() {
     
};

// Övning2

let carina = {
   
        number      : 123,
        manufacture : 'Toyota',
        ModelYears  : 1960,
        gearbox     : '6 gears', 
        mileage     :  10000, 
        firing      : 'fuel', 
    
};

console.log(carina.firing);
console.log(carina);

let mx5 = {
   
        number      :  134,
        manufacture : 'Mazda',
        ModelYears  :   2018,
        gearbox     :  '6 gears',
        mileage     : 30000,  
        firing      :  'fuel', 
        
    
};

let fit = {
   
        number      :  145,
        manufacture : 'Honda',
        ModelYears  :  2001,
        gearbox     :  '5gears',
        mileage     :  20000 ,
        firing      : 'fuel'
        
    
};




// function car(){
// let cars2 = ['carina','mx5','fit'];

// cars2 = {
//     number      : [123, 134, 145],
//     manufacture : ['Toyota', 'Mazda','Honda'],
//     ModelYears  : [1960,  2018,  2001],
//     gearbox     : ['6 gears', '6 gears', '5gears'],
//     mileage     : [ 10000,  30000,  20000 ],
//     firing      : ['fuel',  'fuel',  'fuel']
    
// };
// return cars2;
// };

// car();
// console.log(car(cars2.number[0])); 

// Övning3

function change(){
    return [arguments[1],arguments[0]];
} 
let x = 1, y = 2;
console.log('x = ' + x +'\n' + 'y =' + y);
[x,y] = change(x,y);
console.log('x = ' + x +'\n' + 'y =' + y);



// Senast teknik 
let x1 = 1, y1 = 2;
console.log('x1 = ' + x1 +'\n' + 'y1 =' + y1);
[x1,y1] = [y1,x1]
console.log('x1 = ' + x1 +'\n' + 'y1 =' + y1);

