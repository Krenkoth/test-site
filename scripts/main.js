
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/Monkey.jpg") {
        myImage.setAttribute("src", "images/flying-monkeys.jpg");
    } else {
        myImage.setAttribute("src", "images/Monkey.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");

    if (!myName) {
        setUserName()
    } else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Monkeys are cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName= localStorage.getItem("name");
    myHeading.textContent = `Monkeys are cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};