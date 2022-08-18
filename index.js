let message = ''
let charges
function scuberGreetingForFeet(someNumber){
  if (someNumber <= 400){
    return message ='This one is on me!';
  }
  else if(someNumber > 2000 && someNumber<2500){
    return 'I will gladly take your thirty bucks.'
  }
  else if (someNumber>2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if(city =='NYC'){
    return 'Ok, sounds good.'
  }
  else{
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){ 
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
        break;
    case 'thanks for everything':
      return 'Bye.'
}
}