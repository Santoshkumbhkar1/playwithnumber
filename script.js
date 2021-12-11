"use strict";


/*
    console.log(document.querySelector('.message').textContent);
    console.log(document.querySelector('.message').textContent ='Correct Number')

*/
let hiddenNumber =Math.trunc(Math.random()*20)+1;
   

let score =20;

    document.querySelector('.check').addEventListener('click', function(){
    const think =
    Number(document.querySelector('.think').value);
    console.log(think,typeof think);




if (!think){

    // when there is no input in inpute field    
    document.querySelector('.message').textContent ='enter a number (no number)!';
    document.querySelector('body').style.backgroundColor='rgb(161, 7, 7)'
            }
    // here player will  win the game  if 
    
else if(think===hiddenNumber){
    
    (document.querySelector('.message').textContent  ='😜😜Correct Number');

    document.querySelector('.number').textContent=hiddenNumber;

    document.querySelector('body').style.backgroundColor='rgb(180, 170, 300)';

    document.querySelector('.number').style.width='25rem';


    // if think is diferent from the unknown number 


} else if(think!==hiddenNumber){
    
    if(score>0){
        document.querySelector('.message'). textContent = think > hiddenNumber ?'Please  enter lower number' : 'Please  enter greater number';

        score--;
        document.querySelector('.score').textContent=
        score;
    
    }else{ 
       
        document.querySelector('.message').textContent="👀🔐🍃you lost the Game";
        
        document.querySelector('.number').textContent=hiddenNumber;
    
       }

    

}


// else if(think >hiddenNumber){
  
//    if(score>0){
//     (document.querySelector('.message'). textContent ='Please  enter lower number') ;
//     score--;
//     document.querySelector('.score').textContent=
//     score;

// }else{ 
   
//     document.querySelector('.message').textContent="👀🔐🍃you lost the Game";
    
//     document.querySelector('.number').textContent=hiddenNumber;

//    }
 


// }else if(think<hiddenNumber){
//    if(score>0){
//      (document.querySelector('.message'). textContent ='Please  enter greater number') ;
//      score--;
//      document.querySelector('.score').textContent=
//      score;
    
// } else{ 
    
//         document.querySelector('.message').textContent="👀🔐🍃you lost the Game";
    
//        }
    
  
// }



});

document.querySelector('.rplay').addEventListener('click', function(){

    //  let score=20;
     hiddenNumber =Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent= 'Start guessing....';
    document.querySelector('.number').textContent= '?';

    document.querySelector('.score').textContent= '20';

   document.querySelector('.think').value= ''; 
   document.querySelector('.number').style.width='15rem';

  });


// const measureKelvin =function(){
//     const measurement ={
//         type :'temp',
//         unit: 'celcius',
//         value: promt ('Degree celsius:')

//     };

//     const kelvin =measurement.value + 273;
//     return kelvin;
// };
// console.log(measurekelvin());
 