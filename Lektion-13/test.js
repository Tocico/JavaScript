function getDate(myYear,myMonth,myDay){
    let date = new Date();

    let nowYear = date.getFullYear();
    let nowMonth = date.getMonth()+1;
    let nowDay = date.getDate();

    let diffYear = nowYear - myYear;
    let diffMonth = nowMonth - myMonth;
     let diffDay = nowDay - myDay;

    //---------------age---------------------------
    
    let now = (nowYear*10000) + (nowMonth*100) + nowDay;
    let my = (myYear*10000) + (myMonth*100) + myDay;

    let age = Math.floor((now-my)/10000);
    
    //---------------month--------------------------

    if(diffMonth < 0){ 
        diffMonth += 12;
    }
    // if(diffMonth === 0){
    //     diffMonth += 12;
    // }

    //--------------days------------------------------
    if(diffDay < 0){
        diffMonth--;
        diffDay += 31;

    if(diffMonth < 0){
        diffYear--;
        diffMonth += 12;
    }
    nowMonth--;
    if(nowMonth<0){
        nowMonth += 12;
    }

    }
    



    return [age,diffMonth,diffDay];

}
console.log(getDate(1988,11,07));