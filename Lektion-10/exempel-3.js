//Truthy & Falsy
//Följande värden är alltid falska i JS
//0
//null 
//NaN
//false
//undefined
//''
//""

if(false || 0 || null || NaN || undefined || '' || "" ){
     console.log('vi kommer aldrig hit');
}

let x ='';
if(x === ''){ 
    console.log('x är en tom sträng');
}

if(1){
    console.log('Vi har en etta');
}
let toshiko;// Undefined
if(toshiko){ 
    console.log('hej');
}
else{
    console.log('nej'); //nej
}

if([]){ //true
    console.log('Vi har en array');
}

if({}){ //true

}

if('0'){ //true

}

if('false'){ //true
   console.log('yes');
}

if(!NaN){ // Not Not a number = true
    console.log('test på !NaN');
}

if(undefined == null){
    console.log('true'); //true
}

if(0 != [] ){
    console.log('true');
}
else{
    console.log('false');
}

let a = '';
let b = (a || {})
console.log(b); //{}

let r = 0;
let y = 1;
let z = 2;
let o = (r||y||z)
 console.log(o); //1

 if('orange'==='apple'){
     console.log('true!');
 }else{
 console.log('false');
 }

 let mood = 'sleepy';
let tirednessLevel = 6;

if(tirednessLevel > 8){
  console.log('time to sleep');
}else{
  console.log('not bed time yet');
}

if(!(1<5)){
    console.log('true');
}else{
    console.log('false');
}



