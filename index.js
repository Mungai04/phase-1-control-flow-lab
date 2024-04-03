function scuberGreetingForFeet(Distance){if (Distance <= 400){
  return"This one is on me!";
}else if (Distance > 400 && Distance <= 2000){
  return "That will be twenty bucks.";
}else if (Distance > 2000 && Distance <= 2500) {
  return"I will gladly take your thirty bucks."
}else{
  return "No can do.";
}
  // Write your code here!
}

function ternaryCheckCity(City){
  return City === "NYC" ? "Ok, sounds good." :
  "No go.";
  // Write your code here!
}

function switchOnCharmFromTip(Tip){
  switch (Tip) {
    case "generous":
      return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
        default:
          return "Bye."
  }
  // Write your code here!
}
