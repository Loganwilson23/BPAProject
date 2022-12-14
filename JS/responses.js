function getBotResponse(input) {
    // buying a car reponses
    console.log(input)
    if (input == "How do i buy a car?") {
        return "You would go to the home page or go to our sales page";
    } else if (input == "how do i buy a car?") {
        return "You would go to the home page or go to our sales page";
    } else if (input == "where can i buy a car at") {
        return "You would go to the home page or go to our sales page";
    }
    else if (input == "how can i buy a car?") {
        return "You would go to the home page or go to our sales page";
    }

    // Simple responses
    if (input == "hello" || input == "Hello") {
        return "Hello there! How can I help you today? ";
    } else if (input == "goodbye" || input == "Goodbye") {
        return "Talk to you later!";
    } else if (input == "good" || input == "Good") {
        return "That is good , How may I help you today ?";
    }
    else if (input == "bad" || input == "Bad") {
        return "awe I'm sorry to hear that  , How may I help you today ?";
    }



    // finding pages
    if (input == "where can i find about us page") {
        return "You can find the About Us page in the top left of the page saying About US";
    } else if (input == "blue" || input == "Blue") {
        return "Talk to you later!";
    } else if (input == "red" || input == "Red") {
        return "That is good , How may I help you today ?";
    }
    else if (input == "green" || input == "Green") {
        return "That is good , How may I help you today ?";
    }
    else if (input == "purple" || input == "Purple") {
        return "awe I'm sorry to hear that , How may I help you today ?";
    }
    else if (input == "black" || input == "Black") {
        return "awe I'm sorry to hear that  , How may I help you today ?";
    }
    else {
        return "Try asking something else!" + " (Like car colors: How  do I buy a car)";
    }

}