function makeAllCaps(array) {
    return new Promise((resolve) => {
        resolve(String.prototype.toUpperCase.apply(array));
    });
}
function sortWords(array) {
    return new Promise((resolve) => {
        resolve(array.sort());
    });
}
sortWords(arrayOfWords)
.then(makeAllCaps)
.then((resolve) => {
    console.log(resolve);
});
sortWords(complicatedArray)
    .then(makeAllCaps)
    .then((resolve) => {
        console.log(resolve);
    });
    
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];