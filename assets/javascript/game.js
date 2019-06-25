//  * There will be four crystals displayed as buttons on the page.
//make images clickable

//Random number
var randomNumber = Math.floor(Math.random() * 121)+ 19;
var numbersArray = [];
var imagesSrc = ['assets/images/image1.jpg', 'assets/images/image2.jpg', 'assets/images/image3.jpg', 'assets/images/image4.jpeg']

for(var i =0; i<4; i++){
  var number = Math.floor(Math.random() * 12) + 1;
  numbersArray.push(number)
}

for(var i=0; i< imagesSrc.length; i++){
  //create a new image tag
  var img = $("<img>").attr('src', imagesSrc[i]).addClass('img');
  for (var j = 0; j < 4; j++) {
    img.attr('data-number', numbersArray[j])
  }
  $('body').append(img)
  //append the source and 
  //append the random number inside
}
console.log(numbersArray)



  //  * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
  //Total score will be increase eveytime the user clicks on a crystal

  // * Your game will hide this amount until the player clicks a crystal.
//we can't display the value of each image(crystal);


  // * The player wins if their total score matches the random number from the beginning of the game.
//if (totalScore === random number){
  //wins++
//}

  //  * The player loses if their score goes above the random number.
  //if (totalScore > random number){
  //losses++
//}

  //  * The game restarts whenever the player wins or loses.
  //restart game

  //    * When the game begins again, the player should see a new random number.Also, all the crystals will have four new hidden values.Of course, the user's score (and score counter) will reset to zero.

  //random number for the number to match and for each crystal

  // * The app should show the number of games the player wins and loses.To that end, do not refresh the page as a means to restart the game.