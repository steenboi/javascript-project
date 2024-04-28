//
// Austin Carranza
// 29 April 2024
// WEB 115 final project
// projectJS.js
// this javascript file is called by finalProject.html
//

// event listeners
document.getElementById("generatePlanner").addEventListener('click', generatePlanner);
document.getElementById("clearPlanner").addEventListener('click', clearPlanner);

let text;

// function to generate planner in new window 
function generatePlanner() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let goal = document.getElementById("goal").value;

    // if email is invalid, send alert to user
    // if email is valid, this conditional will be skipped
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // using key-value pairs for each day of the week
    let mealPlan = {
        MONDAY: {
            breakfast: document.getElementById("monBreakfast").value,
            snack1: document.getElementById("monSnack1").value,
            lunch: document.getElementById("monLunch").value,
            snack2: document.getElementById("monSnack2").value,
            dinner: document.getElementById("monDinner").value
        },
        TUESDAY: {
            breakfast: document.getElementById("tueBreakfast").value,
            snack1: document.getElementById("tueSnack1").value,
            lunch: document.getElementById("tueLunch").value,
            snack2: document.getElementById("tueSnack2").value,
            dinner: document.getElementById("tueDinner").value
        },
        WEDNESDAY: {
            breakfast: document.getElementById("wedBreakfast").value,
            snack1: document.getElementById("wedSnack1").value,
            lunch: document.getElementById("wedLunch").value,
            snack2: document.getElementById("wedSnack2").value,
            dinner: document.getElementById("wedDinner").value
        },
        THURSDAY: {
            breakfast: document.getElementById("thurBreakfast").value,
            snack1: document.getElementById("thurSnack1").value,
            lunch: document.getElementById("thurLunch").value,
            snack2: document.getElementById("thurSnack2").value,
            dinner: document.getElementById("thurDinner").value
        },
        FRIDAY: {
            breakfast: document.getElementById("friBreakfast").value,
            snack1: document.getElementById("friSnack1").value,
            lunch: document.getElementById("friLunch").value,
            snack2: document.getElementById("friSnack2").value,
            dinner: document.getElementById("friDinner").value
        },
        SATURDAY: {
            breakfast: document.getElementById("satBreakfast").value,
            snack1: document.getElementById("satSnack1").value,
            lunch: document.getElementById("satLunch").value,
            snack2: document.getElementById("satSnack2").value,
            dinner: document.getElementById("satDinner").value
        },
        SUNDAY: {
            breakfast: document.getElementById("sunBreakfast").value,
            snack1: document.getElementById("sunSnack1").value,
            lunch: document.getElementById("sunLunch").value,
            snack2: document.getElementById("sunSnack2").value,
            dinner: document.getElementById("sunDinner").value
        }
    };

    // start of text for generated meal plan
    text = "<html>\n";
    text += "<head>\n";
    text += "<title>Meal Plan</title>\n";
    text += "</head>\n";
    text += "<body>\n";
    text += "<h1>Meal Plan for " + name + "</h1>\n";
    text += "<h3>Email: " + email + "</h3>\n";
    text += "<h3>Goal for the Week: " + goal + "</h3>\n";

    // window.print()
    // creating a button to print generated meal plan
    // https://www.w3schools.com/js/js_output.asp
    text += "<button onclick='window.print()'>Print/Download Planner</button>\n";
    text += "<p>(To download this meal plan, click 'Print/Download Planner' and change destination to 'save as pdf')</p>\n";
    text += "<br>";
    text += "<h2>Meal plan for the week:</h2>\n";
    text += "<ul>\n";
    let days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];
    // for loop to display meals for each day of the week
    for (let i = 0; i < days.length; i++) {
        let count = days[i];
        let j = mealPlan[count];
        // 'count' variable will display 'MONDAY', 'TUESDAY', etc.
        text += "<li><h3>" + count + "</h3><br>";
        text += "Breakfast: " + j.breakfast + "<br><br>";
        text += "Snack: " + j.snack1 + "<br><br>";
        text += "Lunch: " + j.lunch + "<br><br>";
        text += "Snack: " + j.snack2 + "<br><br>";
        text += "Dinner: " + j.dinner + "</li>\n";
        text += "<br><br>";
    }
    text += "</ul>\n";
    text += "</body>\n";
    text += "</html>";
    // end of text for generated meal plan

    // from mealPlanPop.html
    let pop = window.open('about:blank','myPop','width=500,height=500,left=200,top=200');
    // document.write will populate the generated meal plan
    pop.document.write(text);
    pop.document.close();
}// this ends generatePlan function

function clearPlanner() {
    // reset method
    // https://www.w3schools.com/jsref/met_form_reset.asp
    document.getElementById("form").reset();
}

function validateEmail(email) {
    // https://regexr.com/3e48o
    let regex = /^[\w\-\.]+@([\w\-]+\.)+[\w\-]{2,4}$/;
    // .test will test the validity of the email using regex above
    return regex.test(email);
}
