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
    const newPara = document.createElement('p');
    newPara.textContent = "this paragraph was added using javascript, task 11";
    document.body.appendChild(newPara);

// 1️⃣2️⃣ Create a new <li> and add it to the existing <ul>.
const newLi = document.createElement("li");
newLi.textContent = "this line wes added with javascript";
    document.querySelector("ul").appendChild(newLi);

// 1️⃣3️⃣ Create a <button> labeled "Click Me!" and append it to a <div>.
const btn1 = document.createElement("button");
document.querySelector("div").appendChild(btn1);
btn1.textContent = "Click Me!";

// 1️⃣4️⃣ Create <h2> dynamically and insert it before the first <p>.
    const heading2 = document.createElement('h2');
heading2.textContent = "I was created dynamically!";
const p1 = document.querySelector("p");
if (p1)
{
    p1.parentNode.insertBefore(heading2, p1);
        }

// 1️⃣5️⃣ Create an image and set width and height.
    const newImg = document.createElement("img");
newImg.style.width = "100px";
newImg.style.height = "100px";
newImg.src = "https://i.pinimg.com/736x/2d/95/e5/2d95e5886fc4c65a6778b5fee94a7d59.jpg";
document.body.appendChild(newImg);

// 1️⃣6️⃣ Add 3 new <li> items using a loop.
const unorderdList = document.querySelector('ul');

if (unorderdList)
{   
    for(let i = 1;i<=3;i++)
    {
        const newListItem = document.createElement("li");
        newListItem.textContent = `New item number: ${i}`
        unorderdList.appendChild(newListItem);
    }           
}
// 1️⃣7️⃣ Create a <div> with class "card" and text inside.
const card1 = document.createElement("div");
card1.classList.add("Card");
card1.textContent = "I am new card element";
document.body.appendChild(card1);

// 1️⃣8️⃣ Append a paragraph containing your name.
const myname = document.createElement("p");
myname.textContent = "عمرو زيد المحيسن/Amro Zaid Al Mohisn";
document.body.appendChild(myname);
// 1️⃣9️⃣ Add a <span>[Edited]</span> inside every <p>.

    pList.forEach(element => {
        const editSpan = document.createElement('span');
        editSpan.textContent = "[Edited]";
        element.appendChild(editSpan);
    });

// 2️⃣0️⃣ Remove the last child of <ul>.
if (unorderdList && unorderdList.lastElementChild)
{
    const lastChiled = unorderdList.lastElementChild;
    unorderdList.removeChild(lastChiled);   
        
}

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
