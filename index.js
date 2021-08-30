
function scuberGreetingForFeet(ride){
  // Write your code here!

  
  let greeting = '';

  if (ride <= 400){
    greeting = 'This one is on me!';
  }
  else if(ride > 2000 && ride < 2500){
    greeting = 'I will gladly take your thirty bucks.'
  }
  else{
    greeting = 'No can do.';
  }

  return(greeting);
  

}

function ternaryCheckCity(city){
  // Write your code here!
let cityCheck = (city === "NYC") ? "Ok, sounds good.": "No go.";
return(cityCheck);

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return("Thank you so much.")
      break;
    case "not as generous":
      return("Thank you.")
      break;
    default:
      return("Bye.")
  }
}