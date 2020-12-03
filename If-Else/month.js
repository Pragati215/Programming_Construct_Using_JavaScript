var readlineSync = require('readline-sync');
var currentDate = readlineSync.question("Enter your date: "); 
     
    var minDate = new Date('20/03/2020');
    var maxDate =  new Date('20/06/2020');

    if (currentDate > minDate && currentDate < maxDate ){
         console.log('true')
    }
    else{
        console.log('false')
    }
 
    