let dag = 1;
let lon = 1;

while(lon <= 10000000){
    //Man måste jobba
    dag ++;
    //Lön fördubblas
    lon = lon * 2; // Eller lon *= 2;
    //console.log('Dag'+dag+', Lön:'+ lon);
}
// Sluta jobba
console.log('Du måste jobba dag '+ dag + 'för att tjäna minst 10 miljoner');

//Samma problem med for-sats istället
dag = 1;
lon = 1;
for (dag = 1; lon <= 10000000; dag++){
    lon *= 2;
}
console.log('---------------for-sats---------------');

console.log('Du måste jobba dag '+ dag + 'för att tjäna minst 10 miljoner');

dag = 1;
lon = 1;
for (dag = 1; lon <= 10000000; lon *= 2){
    dag ++;
}
console.log('---------------for-sats---------------');

console.log('Du måste jobba dag '+ dag + 'för att tjäna minst 10 miljoner');


dag = 1;
lon = 1;
for (lon = 1; lon <= 10000000; lon *= 2){
    dag ++;
}
console.log('---------------for-sats---------------');

console.log('Du måste jobba dag '+ dag + 'för att tjäna minst 10 miljoner');



let day = 1;
let salary = 1;

for(salary = 0; salary <= 10000000; salary*=2){
    day ++;
}
console.log('Det tar '+ day);