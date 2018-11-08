//Iteration över arrayer

// let os = ['Windows','Macintosh','Linux','Unix','ios','Windows','ios','ios'];
// let os2 = {};
// for (let i = 0; i< os.length; i++){
//     if(os2[os[i]]=== undefined){
//         os2[os[i]] = 1;
//     }
//     else{
//         os2[os[i]] ++;
//     }
// }
// console.log(os2);  


let data = [
    {name:'Toshiko', email:'toshiko@gmail.com', adress:{ 
        street: 'Tomtebodevägen 3a',
        country: 'Solna',
        zipcode: '111 22'
    }
    // products:[

    // ]
    },
    {name:'Taeko', email:'taeko@gmail.com',adress:{ 
        street: 'Tomtebodevägen 3a',
        country: 'Solna',
        zipcode: '111 22'
    }},
    {name:'Hitoshi', email:'Hitoshi@gmail.com',adress:{ 
        street: 'Tomtebodevägen 4a',
        country: 'Solna',
        zipcode: '111 22'
    }},
    {name:'Ikuko', email:'Ikuko@gmail.com',adress:{ 
        street: 'Tomtebodevägen 5a',
        country: 'Solna',
        zipcode: '111 22'
    }},
    {name:'Tsuyoshi', email:'Tsuyoshi@gmail.com',adress:{ 
        street: 'Tomtebodevägen 6a',
        country: 'Solna',
        zipcode: '111 22'
    }}
];

for(let obj of data){
    console.log(obj.name + ' bor på '+ obj.adress.street);
}
//Skriv ut e-post adresser
for (let i = 0; i < data.length; i++) {
    console.log(data[i].email);
    
    console.log(data[i]); // Skriv ut alla objekt
}


console.log('----------For-in-------------'); // Index

//For- in - sats
for(let i in data){
    console.log(i + ':' + data[i].name);
}

//For - of -satsen
console.log('----------For-of-------------');  //vet ej index
for(let obj of data){
    console.log(obj.name , obj.email);
}

