 //One way of write function

// function printMyName (name) {

//     console.log(name);
// }
// printMyName('Neeraj');


function printMyName (name) {
    return name+' Tiwari'
}

console.log(printMyName('Neeraj'));

 //second way to write function
 
 const printMyNameAnotherWay = function(name){
     console.log(name);
 }
 printMyNameAnotherWay('Neeraj');

 //Third way to write function

    const printMyNameInSMARTWay = (name) =>{
        console.log(name);
     }
   printMyNameInSMARTWay('Neeraj');


 //new type of write function

 const printMyNameInSMARTESTWay = (name) => name + 'Tiwari';

 console.log(printMyNameInSMARTESTWay('Neeraj'));