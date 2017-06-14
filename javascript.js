var quotes= [
  "Chaga is one of the weirdest mushrooms you may ever see." ,
  "We all know interspecies romance is weird.",
  "Im glad apples don't scream when you bite into them.",
  "A Freudian slip is when you say one thing but mean your mother.",
  "Some mornings, it's just not worth chewing through the leather straps",
  "Life may have no meaning. Or even worse, it may have a meaning of which I disapprove.",
  "For three days after death, hair and fingernails continue to grow but phone calls taper off.",
  "I hate to advocate drugs, alcohol, violence, or insanity to anyone, but they've always worked for me",
  "A great many people think they are thinking when they are merely rearranging their prejudices.",
  "May the forces of evil become confused on the way to your house."
]
function rumplesFuture() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("form1").innerHTML = quotes[randomNumber];
}
