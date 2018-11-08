function pita(a,b){

    return Math.pow(a,2) + Math.pow(b,2);

}
console.log(pita(3,6));


function circle(r){
    let area = Math.PI * Math.pow(r,2);
    let omkrens = 2* Math.PI * r;
    return area.toFixed(2)+'    ' + omkrens.toFixed(2);

}
console.log(circle(5));


function sfar(r){
    let v = 4*Math.PI*Math.pow(r,3)/3;
    let a = 4* Math.PI*Math.pow(r,2);
    console.log(v +'  ' + a);
 
 }
 sfar(4);