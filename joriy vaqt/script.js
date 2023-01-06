let myVar = setInterval(myTimer, 1000);
        function myTimer() {
            const d = new Date();
            document.getElementById("clock").innerHTML = d.toLocaleTimeString();
        }


        
// var intervalID;

// function showTime() {
//     var d = new Date();
//     document.getElementById("clock").innerHTML = d.toLocaleTimeString();

// }
// function startClock(){
//     setTimeout(intervalID)
// } 

// function stopClock() {
//     clearInterval(intervalID);
// }


// var intervalID = setInterval(showTime, 1000);




// function stop() { setInterval(myFunction, 1000); }
// function myFunction() {
//     var intervalID;

//     function showTime() {
//         var d = new Date();
//         document.getElementById("clock").innerHTML = d.toLocaleTimeString();

//     }
//     function startClock() {
//         setTimeout(intervalID)
//     }


//     var intervalID = setInterval(showTime, 1000);

// }

