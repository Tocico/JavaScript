//Arbeta med interationer
//For-satsen

for(let i = 0; i < 10; i++){ // i++ eller i = i + 1
    console.log(i); //0-9
}
console.log('--------------------------');
for(let i = 1; i <= 10; i++){ 
    console.log(i); //1-10
}
console.log('--------------------------');
let str = '';
for(let i = 1; i < 10; i= i + 2){ 
    str += i;
    if(i < 9){
        str += ','; // Visa inte sista ,
    }
}
console.log(str); //1,3,5,7,9
console.log('--------------------------');
// Skriv ut enbart tal som är jämt delbart med 3
for(let i = 1; i <= 10; i++){ 
    if(i%3 === 0) // ingen rest vid division med 3
    console.log(i); // 3,6,9
}
    console.log('-------------Övning1-------------');
    for(let i = 2; i <= 20; i= i + 2){
        console.log(i);
    }
    console.log('------------Övning1--------------');
    for(let i = 2; i <= 20; i++ ){
        if(i%2 === 0)
        console.log(i);
    }

console.log('------------Övning2--------------');
for(let i = 5; i <= 100; i ++){
    if(i%5 === 0)
    console.log(i);
}
console.log('------------Övning2--------------');
for(let i = 5; i <= 100; i = i + 5){
    console.log(i);
}
console.log('--------------------------');

let st = '';
for(let i = 3; i <= 10; i=i+3){
    st += i + ',';
//     if(i < 9){
//      st += ','
//     }
 }
console.log(st.substring(0,st.length-1));

