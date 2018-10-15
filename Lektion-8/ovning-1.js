

function FrontEnd(kursNamn,teacher,points,grade,avklarad){
     this.kursNamn = kursNamn;
     this.teacher = teacher;
     this.points = points;
     this.grade = grade;
     this.avklarad = avklarad;
}

let javaScript = new FrontEnd('javascript','Mahmud',35,'G',true);
let introduktion = new FrontEnd('introduktion','Per',30, 'VG', true);


let nackademin = [javaScript,introduktion];
console.log(nackademin);