// const  myFamily (name){
//     return name + 'tiwari'
// }
//------------------------------
// const greet =( msg,person) => {
//  return 'Hey' 
//  `Neeraj`;
// }

// const printMyNameInSMARTWay = (name) =>{
//     console.log(name);
//  }
// printMyNameInSMARTWay('Neeraj');


const greet =(person) => {
    return ('Hey '+person+'!');

}


const cleanNames = function(names){
    return names.map(function(names){return names.trim()});
};

let fName = 'Neeraj'
let secName = 'tiwari'
let fullName = fName +' '+ secName;