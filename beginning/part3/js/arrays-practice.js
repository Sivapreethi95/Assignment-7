//STEP 1
console.log("_____Step 1_____");

var favoriteMovies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran"];
window.console.log(favoriteMovies[1]);
//STEP 2
console.log("_____Step 2_____");

var movies = new Array(5);
movies[0] = "Petta";
movies[1] = "Kaala";
movies[2] = "Kabali";
movies[3] = "Sivaji";
movies[4] = "Enthiran";
window.console.log(movies[0]);
//STEP 3
console.log("_____Step 3_____");

var movies = new Array(5);
movies[0] = "Petta";
movies[1] = "Kaala";
movies[2] = "Kabali";
movies[3] = "Sivaji";
movies[4] = "Enthiran";
movies.splice(2, 0, 'Baasha');
// window.console.log(movies[2]);
window.console.log(movies.length);
//STEP 4
console.log("_____Step 4_____");

var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran"];
delete movies[0];
window.console.log(movies);
//STEP 5
console.log("_____Step 5_____");

var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran", "Baasha", 
"Muthu"];
var i;
for(i=0; i<movies.length; i++) {
    window.console.log(movies[i]);
}
//STEP 6
console.log("_____Step 6_____");

var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran", "Baasha", 
"Muthu"];
var i;
for (i in movies) {
    window.console.log(movies[i]);
}
//STEP 7
console.log("_____Step 7_____");
var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran", "Baasha", 
"Muthu"];
var i;
movies.sort();
for (i in movies) {
    window.console.log(movies[i]);
}
//STEP 8
console.log("_____Step 8_____");

var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran", "Baasha", 
"Muthu"];
var leastFavMovies =["Singam", "Baba", "Sura"];
var i;
window.console.log("Movie I like:\n\n");
for(i=0; i<movies.length; i++) {
    window.console.log(movies[i]);
}
console.log("\n");
var j;
window.console.log("Movies I regret watching:\n\n");
for(j=0; j<leastFavMovies.length; j++) {
    window.console.log(leastFavMovies[j]);
}
//STEP 9
console.log("_____Step 9_____");

var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran", "Baasha", 
"Muthu"];
movies = movies.concat(leastFavMovies);
movies.sort();
window.console.log(movies.reverse());
//STEP 10
console.log("_____Step 10_____");

var movies = ["Petta", "Kaala", "Kabali", "Sivaji", "Enthiran", "Baasha", 
"Muthu"];
movies = movies.concat(leastFavMovies);
movies.sort();
movies.reverse();
window.console.log(movies.pop());// return val;




