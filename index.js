function scuberGreetingForFeet(ride){
  if (ride <= 400) {
    return 'This one is on me!'

  } else if (ride> 400 && ride <= 2000) {
    return 'That will be twenty bucks.'

  } else if (ride > 2000 && ride <= 2500) {
    return 'I will gladly take your thirty bucks.'

  } else if (ride >2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(x){
  // Write your code here!
  let r
   x==='NYC'?(r = 'Ok, sounds good.'):(r='No go.')
  return r
}

function switchOnCharmFromTip(y){
  // Write your code here!
  switch(y) {
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';

  }
}