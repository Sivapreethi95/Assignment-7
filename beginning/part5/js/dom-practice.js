/*eslint-env browser*/

//STEP 1
function webPage() {
    window.alert("I have been clicked1");
}
// STEP 2
// var myButton = window.document.getElementById("myButton");
// myButton.onclick = function () {
//     "use strict";
//     window.alert("I have been clicked2");
// };
//STEP 3
// function clickAlert () {
//     "use strict";
//     window.alert("I have been clicked");
// }
// var myElement= window.document.getElementById("myButton");
// myElement.addEventListener("click", clickAlert);

//STEP 4
// var myElement= window.document.getElementById("myButton");
// myElement.addEventListener("click", function () {
//     "use strict";
//     window.alert("I have been clicked");
// });
//STEP 5
function init() {
    "use strict";
    var myElement= window.document.getElementById("myButton");
    myElement.addEventListener("click", function (e) {
    "use strict";
    window.alert("I have been clicked");
    });
}
window.addEventListener("load", init);