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

let x = '';
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

}

if(!NaN){ // Not Not a number = true
    console.log('test på !NaN');
}
