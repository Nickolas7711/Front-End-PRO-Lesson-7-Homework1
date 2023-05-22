// debugger;
array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(array, item) {
    indexElementArray = array.indexOf(item);

    if (indexElementArray !== -1) {
        array.splice(indexElementArray, 1);
    }
}

removeElement(array, 5);
console.log(array);