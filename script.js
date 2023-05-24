let element = document.getElementById("level");
let traversal = element;
let ct = 0;

while (traversal !== document.body) {
    traversal = traversal.parentElement;
    ct++;
}

alert ("The level of the element is: " + ct)

