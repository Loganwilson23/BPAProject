function getBotResponse(input) {
  // buying a car repsonses
  if (input.toLowercase == "How do i buy a car?") {
    return "You would go to the home page or go to our sales page";
} else if (input.toLowercase == "how do i buy a car?") {
    return "You would go to the home page or go to our sales page";
} else if (input.toLowercase == "where can i buy a car at") {
    return "You would go to the home page or go to our sales page";
}
else if (input.toLowercase == "how can i buy a car?") {
    return "You would go to the home page or go to our sales page";
}

// Simple responses
if (input.toLowercase == "hello") {
    return "Hello there!";
} else if (input.toLowercase == "goodbye") {
    return "Talk to you later!";
} else if(input.toLowercase == "Good"){
    return "That is good , How may I help you today ?" ;
}
else if(input == "good"){
    return "That is good , How may I help you today ?" ;
}
else if(input.toLowercase == "Bad"){
    return "awe I'm sorry to hear that , How may I help you today ?" ;
}
else if(input.toLowercase == "bad"){
    return "awe I'm sorry to hear that  , How may I help you today ?" ;
}



// finding pages
if (input.toLowercase == "where can i find about Us page") {
  return "You can find the About Us page in the top left of the page saying About US" ;
} else if (input.toLowercase == "goodbye") {
    return "Talk to you later!";
} else if(input.toLowercase == "Good"){
    return "That is good , How may I help you today ?" ;
}
else if(input.toLowercase == "good"){
    return "That is good , How may I help you today ?" ;
}
else if(input.toLowercase == "Bad"){
    return "awe I'm sorry to hear that , How may I help you today ?" ;
}
else if(input.toLowercase == "bad"){
    return "awe I'm sorry to hear that  , How may I help you today ?" ;
}
else {
    return "Try asking something else!";
}

}