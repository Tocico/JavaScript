
for(let i = 1; i <= 100; i++){
    
    // if(i%3 === 0){
    //    console.log('Fizz');
    // }
    // else if(i%5 === 0){
    //     console.log('Buzz');
    // }
    // else if(i%3 === 0 && i%5 === 0){
    //     console.log('FizzBuzz');
    // }
    // else{
    //     console.log(i);
    // }
    let output = '';
    if(i%3 === 0){ output+= 'Fizz'}
    if(i%5 === 0){ output+= 'Buzz'}
    
    else{ output = i }
    
    console.log(output);
    

}
