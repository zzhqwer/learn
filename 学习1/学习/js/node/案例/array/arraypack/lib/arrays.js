exports.arrayRepeat = function(getArray) {
    var newArray = [];
    for(let i = 0; i<getArray.length; i++) {
        if(newArray.indexOf(getArray[i]) === -1) {
            newArray.push(getArray[i]);
        }
    }
    for(let j = 0; j <newArray.length-1; j++) {
        for(let k = 0; k < newArray.length -j+1; k++) {
            if(newArray[k]>newArray[k+1]){
                var temp = newArray[k];
                newArray[k] = newArray[k+1];
                newArray[k+1] = temp;
            }
        }
    }
    return newArray;
}