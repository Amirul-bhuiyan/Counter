// Reusable function to handle counter functionality
function createCounter(inputSelector, limitSelector, buttonSelector, counterSelector) {
    let CountNumber = 0;
    let interval;

    // Selecting the elements based on the selectors 
    let LastNumber = document.querySelector(inputSelector);
    let LastLimit = document.querySelector(limitSelector);
    let AddButton = document.querySelector(buttonSelector);
    let Counter = document.querySelector(counterSelector);

    // Add click event listener
    AddButton.addEventListener("click", () => {
        if (LastNumber.value == "") {
            alert("Type any number");
        } else {
            // Update the span with the input value
            LastLimit.textContent = LastNumber.value;
            let limit = parseInt(LastLimit.textContent); // Get the limit from the span tag
            LastNumber.value = ""; // Clear the input field
            CountNumber = 0; // Reset the counter

            // Clear any existing interval before starting a new one
            if (interval) {
                clearInterval(interval);
            }

            // Start a new interval
            interval = setInterval(() => {
                if (CountNumber >= limit) {
                    clearInterval(interval); // Stop the interval when the limit is reached
                    alert("Limit reached for this counter!");
                } else {
                    CountNumber++;
                    Counter.textContent =  CountNumber; // Update the displayed count
                }
            }, 500); // 1 second interval
        }
    });
}

// Create counter for Counter 1
createCounter(".LastNumber01", ".LastLimit01", ".CounterCard:nth-child(1) .AddButton", ".Counter01");

// Create counter for Counter 2
createCounter(".CounterCard:nth-child(2) .LastNumber", ".CounterCard:nth-child(2) .LastLimit", ".CounterCard:nth-child(2) .AddButton", ".Counter02");

// Create counter for Counter 3
createCounter(".CounterCard:nth-child(3) .LastNumber", ".CounterCard:nth-child(3) .LastLimit", ".CounterCard:nth-child(3) .AddButton", ".Counter03");
