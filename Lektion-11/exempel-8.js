
let tabel = '';
console.log('x\tx^2\tx^3');
for (let x = 1; x <= 12; x++) {
    tabel += x + '\t' + Math.pow(x,2)+ '\t' + Math.pow(x,3)+'\n';
    

}
console.log(tabel);





let y = 1;
let label = '';
console.log(`y\ty2\ty3`);

for(y = 1; y<= 12; y++){
   label += y +'\t'+ Math.pow(y,2) +'\t'+ Math.pow(y,3)+'\n';
}

console.log(label);