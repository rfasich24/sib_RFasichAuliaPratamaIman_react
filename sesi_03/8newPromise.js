setTimeout(() => {
    console.log("tick");
}, 1000);

const doSomething = function () {
    return new Promise((resolve, reject) => {});
};

let doIt = doSomething();

doIt.then((response) => {});

doIt.catch((error) => {});

const setTimeoutPromise = (duration) =>
    new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    });

setTimeoutPromise(1000).then(() => console.log("tick"));
