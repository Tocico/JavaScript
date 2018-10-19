function punkter(x1,y1,x2,y2){

    return  Math.sqrt(Math.pow(x1-y1,2)+ Math.pow(x2 + y2,2));

}
console.log((punkter(2,5,7,8).toFixed(2)));