// fetch('https://github.com/lionhard83/fake-tweets-api')
//     .then(response => {
//         return response.json()
//     }).then(tweets => { 
//         return tweets.filter(tweet => {
//             return tweet.stars > 50;
//         })
//     }).then(tweets => { 
//         return tweets.filter (tweet => {
//             return tweet.rts > 50;
//         })
//     }).catch(err => {
//         console.error(error); 
//     });
import fetch from "node-fetch";
fetch('https://fake-tweets-api.herokuapp.com/posts')
.then(response => response.json ())
.then(tweets => tweets.filter(tweet => tweet.stars > 50))
.then(tweets => tweets.filter(tweet => tweet.rts > 50))
.catch(err => {
    console.error(error);
});
setTimeoutPromise(1000).then(() => console.log("tick"));