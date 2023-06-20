const removeFromArray = function(array, item) {
    for(i in array) {
        if(i == item) {
            array.splice(array.indexOf(item), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
