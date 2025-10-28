// ========================================================
// JavaScript DOM Manipulation Lab - 40 Mini Exercises
// ========================================================

// 🟩 PART 1: Selecting and Styling Elements (1–10)

// 1️⃣ Change text color of heading with id="title" to red.
    document.getElementById("title").style.color="red";

// 2️⃣ Change background color of all <p> elements to lightgray.
    const pList  =document.querySelectorAll("p");
    pList.forEach(element => {
        element.style.backgroundColor = "lightgray";
    });

// 3️⃣ Change heading text (#title) to "Welcome to the DOM Lab!".
    document.getElementById("title").textContent = "Welcome to the DOM Lab!";

// 4️⃣ Add a solid black border to all <div> elements.
    const divList = document.querySelectorAll("div");
    divList.forEach(element => {
        element.style.border = "2px solid black";
    });
// 5️⃣ Increase font size of the first <h1> to 36px.
    document.querySelector("h1").style.fontSize = "36px";

// 6️⃣ Change text color of elements with class="highlight" to blue.
    const eList = document.querySelectorAll(".highlight");
    eList.forEach   (element => {
        element.style.color = "blue";
    });
// 7️⃣ Add CSS class "active" to the first <div>.
    const firstDiv = document.querySelector('div');

    if (firstDiv) {
    firstDiv.classList.add('active');
    }

// 8️⃣ Change the <body> background color to lightblue.
    document.body.style.backgroundColor = "lightblue";

// 9️⃣ Set the font family of all <p> elements to Arial.
    pList.forEach(element => {
        element.style.fontFamily = "Arial";
    });

// 🔟 Change the image source of #sampleImage.
    const sample = document.getElementById("sampleImage");
if (sample) {
    sample.src = "https://imgcdn.stablediffusionweb.com/2024/9/19/ea36129a-658f-4f96-9ef9-9065534afddf.jpg";
    sampleImage.alt = "A new sample image";//don't judge my image of choice 😂
    sample.style.width = "100px";
}
// 🟦 PART 2: Creating and Appending Elements (11–20)

// 1️⃣1️⃣ Create a new <p> and append it to the <body>.


// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.


// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.


// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.


// 1️⃣5️⃣ Create an image and set width and height.


// 1️⃣6️⃣ Add 3 new <li> items using a loop.


// 1️⃣7️⃣ Create a <div> with class "card" and text inside.


// 1️⃣8️⃣ Append a paragraph containing your name.


// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.


// 2️⃣0️⃣ Remove the last child of <ul>.


// 🟨 PART 3: Event Handling (21–30)

// 2️⃣1️⃣ Add click event that shows an alert.


// 2️⃣2️⃣ Change background color of a <div> when clicked.


// 2️⃣3️⃣ When hovering over <p>, make it bold.


// 2️⃣4️⃣ When mouse leaves paragraph, remove bold style.


// 2️⃣5️⃣ Add button to hide the image.


// 2️⃣6️⃣ Add button to show the image again.


// 2️⃣7️⃣ Create a counter button that increases with each click.


// 2️⃣8️⃣ Display entered text from an input when button clicked.


// 2️⃣9️⃣ Change background color randomly when a button is clicked.


// 3️⃣0️⃣ Display which key is pressed.


// 🟧 PART 4: Modifying and Traversing DOM (31–40)

// 3️⃣1️⃣ Change text of the first <li>.


// 3️⃣2️⃣ Get input value when button clicked.


// 3️⃣3️⃣ Count number of <p> and alert the count.


// 3️⃣4️⃣ Remove all <p> elements.


// 3️⃣5️⃣ Replace existing <h2> with new one.


// 3️⃣6️⃣ Add CSS class 'highlighted' to all <li>.


// 3️⃣7️⃣ Toggle a CSS class on <div> when clicked.


// 3️⃣8️⃣ Clone an existing element and append copy.


// 3️⃣9️⃣ Scroll smoothly to bottom when button clicked.


// 4️⃣0️⃣ Build list dynamically using innerHTML from an array.
