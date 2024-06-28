

function calculateGrocery(grocery1, grocery2, grocery3) {
    grocery1 = parseFloat(grocery1);
    grocery2 = parseFloat(grocery2);
    grocery3 = parseFloat(grocery3);
 let ans = grocery1 + grocery2 + grocery3;
 document.getElementById('result').innerText = `The Total amount is: ${ans}`;
}