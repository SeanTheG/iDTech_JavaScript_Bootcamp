let numbers = [23, 1, 999, 403, 4132];

function sorting(array) {
    let sorted = array.sort(
        function(a, b) {
            return a - b;
        }
    );
    console.log(sorted);
}

function addNumber(array, callBack) {
    array.push(73);
    console.log(array);
    callBack(array);
}

addNumber(numbers, sorting);