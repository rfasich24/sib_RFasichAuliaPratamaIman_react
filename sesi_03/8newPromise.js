setTimeout(() => {
    console.log("tick");
  }, 2000);
  
  const setTimeoutPromise = (duration) =>
    new Promise((resolve, rejects) => {
      setTimeout(resolve, duration);
    });
  
  setTimeoutPromise(1000).then(() => console.log("tick"));