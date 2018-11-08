// //Ovning1

// let datum = new Date('2019,1,1');
// let mont = datum.getMonth()+1;
// let day = datum.getDate();
// if(mont< 10){
//     mont = '0' + mont; // sträng + number = sträng
// }
// if(day< 10){
//     day = '0' + day;
// }
// console.log(datum.getFullYear() + '-' +  mont + '-' + day);


// //Ovning2
// console.log(`${datum.getHours()}:${datum.getMinutes()}:${datum.getSeconds()}` );

// //Ovning3
 
// let veckoDagar = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
// let month = ['Jan', 'Feb','Mars', 'Apr','Maj','Jun','Juli','Aug','Sep','Okt','Nov','Dec'];

// console.log(`${veckoDagar[datum.getDay()]} den ${datum.getDate()} ${month[datum.getMonth()]}${datum.getFullYear()}`);


// // setInterval(liveKlocka,10000);
// // function liveKlocka(){
// //     console.log(datum.toTimeString());
// // }

// let now = new Date();

// let today = now.toDateString();

// console.log(today);
// // Hämta år från strängen 'Fri Oct 26 2018'

// let ar = today.substring(11);

// // Hämta dag från strängen
// let dag = today.substr(8,2);

// // Hämta månad från strängen
// let m = today.substr(4,3);
// switch(m){
//     case 'Jan': m = 01; break;
//     case 'Feb': m = 02; break;
//     case 'Mar': m = 03; break;
//     case 'Apr': m = 04; break;
//     case 'May': m = 05; break;
//     case 'Jun': m = 06; break;
//     case 'Jul': m = 07; break;
//     case 'Aug': m = 08; break;
//     case 'Sep': m = 09; break;
//     case 'Oct': m = 10; break;
//     case 'Nov': m = 11; break;
//     case 'Dec': m = 12; break;
// }

// // Skapa strängen
// let result = `${ar}-${m}-${dag}`;
// console.log(result);


// // let a = new Date();
// // let da = a.toLocaleDateString();
// // console.log(a);

// console.log(new Date().toLocaleDateString());



let day = new Date();

// let year = day.getFullYear();
// let month = day.getMonth();
// let date = day.getDate();
// let vecka = day.getDay();

// if(month < 10){
//     month = '0' + month;
// }
// if(date < 10){
//     date = '0' + date;
// }

// console.log(year + '-' + month + '-' + date);

// console.log(day.toTimeString().substring(0,9));

// let veckoDagar = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
// let months = ['Jan', 'Feb','Mars', 'Apr','Maj','Jun','Juli','Aug','Sep','Okt','Nov','Dec'];

// console.log(veckoDagar[vecka]+ 'den' + date + months[month] + year);

let hela = day.toDateString();
console.log(hela);

let year = hela.substring(11);

let date = hela.substring(8,10);

let month = hela.substring(4,7);

switch(month){
    case 'Jan' : month = 01; break; 
    case 'Feb' : month = 02; break; 
    case 'Mar' : month = 03; break; 
    case 'Apr' : month = 04; break; 
    case 'May' : month = 05; break; 
    case 'Jun' : month = 06; break; 
    case 'Jul' : month = 07; break; 
    case 'Aug' : month = 08; break; 
    case 'Sep' : month = 09; break; 
    case 'Oct' : month = 10; break; 
    case 'Nov' : month = 11; break; 
    case 'Dec' : month = 12; break; 
}

console.log(year + '-' + month + '-' + date);

let a = day.toLocaleDateString();
let mon = a.substring(5,7);
let d = a.substring(8,10);
if(mon < 10){
    mon = '0' + mon;
}
if(d < 10){
    d = '0' + d;
}

console.log(mon + d);


function sqr(x1,x2,y1,y2){
      return  Math.sqrt(Math.pow(x1-y1,2)+Math.pow(x2 - y2,2));
    // let f1 = Math.pow(x1 - y1,2);
    // let f2 = Math.pow(x2 - y2,2);
    // return Math.sqrt(f1+f2);


}
console.log(sqr(1,4,6,7).toFixed(2));


