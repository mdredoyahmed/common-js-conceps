function kitchen(){
    let roast = 0;
    return function(){
        roast++;
        return roast;
    }
}
const firstServar = kitchen();
console.log(firstServar);


/* 
function stopwatch(){
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}
const watch = stopwatch();
console.log(watch())

 */
