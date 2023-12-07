/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE




var modelName = "ModelName";
var duration = 10; //minutes




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    // Get the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");

    //modelName and duration
    let modelName = document.getElementById("modelName").value;
    let duration = parseFloat(document.getElementById("duration").value); // Assuming duration is entered as a numerical value

    // Checking the value
    let newTotalCost;

    if (modelName === "XYZ") {
        newTotalCost = duration * 100;
    } else if (modelName === "CPRG") {
        newTotalCost = duration * 213;
    } else {
        
        newTotalCost = 0;
    }

    // Seting the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.innerHTML = newTotalCost;
}






/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

// First, create a variable to represent the "Switch Model" pseudo-button
var modelButton = document.getElementById("switchModelButton");

// Second, create a function called changeModel()
function changeModel() {
    // Create a variable to represent the model-text span element
    let modelText = document.getElementById("model-text");

    // Get the current value of modelName
    let modelName = document.getElementById("modelName").value;

    // Change modelName and update model-text span innerHTML accordingly
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    // Recalculate the total cost
    recalculate();
}

// Finally, uncomment the following line to have the function run automatically on button click
modelButton.addEventListener("click", changeModel);








/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE



var changeDurationButton = document.getElementById("changeDurationButton");


function changeDuration() {
    
    var durationText = document.getElementById("duration-text");

    
    var newDuration = prompt("Enter a new duration (in minutes):");

    
    if (newDuration === null || isNaN(newDuration)) {
        alert("Invalid input. Please enter a valid numeric duration.");
        return; 
    }

    
    durationText.innerHTML = newDuration;

    
    recalculate();
}

changeDurationButton.addEventListener("click", changeDuration);
