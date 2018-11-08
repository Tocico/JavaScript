let dag = 1;
let lon = 1;

for(lon = 1; lon<= 10000000; lon *= 2){
    dag++;
}
console.log(dag);

console.log('------------------------------');

let tabel = '';
for(let i = 1; i<=12; i++){
    tabel += i +'\t'+ i*i +'\t'+ i*i*i+'\n';
}
console.log('x\tx^2\tx^3');
console.log(tabel);


console.log('------------------------------');

for(let i =1; i <= 100; i++){
    let print ='';
    if(i%3=== 0){print += 'Fizz'; }
    if(i%5=== 0){print += 'Buzz'; }
    else {print = i; }
    console.log(print);
}