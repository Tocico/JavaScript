//While-satsen
let i = 1;

while(i <= 10){
    console.log(i+ ' x 5 =' + i * 5);
    i++;
}


// Övning: Skriv koden ovan i for-sats istället
for(let i = 1; i <= 10; i++){
    console.log(i+ ' x 5 =' + i * 5);
}


for (let i = 0; i < 10; i++){
    if (i % 2 === 0){
      continue;   //visar inte jämna tal 
    }
  
    console.log(i); // Visa udda tal
  }
  console.log('----------------------------------');
  
  for (let i = 0; i < 10; i++){
      if (i % 2 === 1){
        continue;   //visar inte udda tal 
      }
    
      console.log(i); // Visa jämna tal
    }
  console.log('------------Övning1--------------');
    for(let i = 0; i < 10; i++ ){
        if(i%2 === 0)
        console.log(i);
    }

    let tabel = '';
for(let r = 1; r <= 10; r++){
    for(let l= 1; l <= 10; l++){
        tabel += r*l + '\t';
    }
    tabel += '\n'
}
console.log(tabel);