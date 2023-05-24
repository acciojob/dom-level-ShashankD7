let element = document.getElementById("line");
let traversal = element;
let ct = 0;

while (traversal !== document.body) {
    traversal = traversal.parentElement;
    ct++;
}

alert ("The level of the element is: " + ct)

