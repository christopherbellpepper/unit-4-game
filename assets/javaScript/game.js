$(document).ready(function() {
  // Variables

  var blueCounter;
  var greenCounter;
  var yellowCounter;
  var pinkCounter;
  var targetNumber;
  var userTotal;

  var wins = 0;
  var losses = 0;

  function gameStart() {
    blueCounter = Math.floor(Math.random() * 12) + 1;
    greenCounter = Math.floor(Math.random() * 12) + 1;
    yellowCounter = Math.floor(Math.random() * 12) + 1;
    pinkCounter = Math.floor(Math.random() * 12) + 1;
    targetNumber = 19 + Math.floor(Math.random() * 101) + 19;

    //Player's Score
    userTotal = 0;
    $("#your-score").text(userTotal);

    // Score to match
    $("#score-to-match").text(targetNumber);
  }

  // Gem Buttons:
  $("#blue-gem").on("click", function() {
    userTotal += blueCounter;
    $("#your-score").text(userTotal);
    winCheck();
  });

  $("#green-gem").on("click", function() {
    userTotal += greenCounter;
    $("#your-score").text(userTotal);
    winCheck();
  });

  $("#yellow-gem").on("click", function() {
    userTotal += yellowCounter;
    $("#your-score").text(userTotal);
    winCheck();
  });

  $("#pink-gem").on("click", function() {
    userTotal += pinkCounter;
    $("#your-score").text(userTotal);
    winCheck();
  });

  // Wins and losses score card
  function win() {
    alert("You Win!");
    wins += 1;
    $("#wins").text(wins);
    gameReset();
  }

  function loss() {
    alert("You Lose!");
    losses += 1;
    $("#losses").text(losses);
    gameReset();
  }

  // Win/Loss Logic
  function winCheck() {
    if (userTotal === targetNumber) {
      win();
    }
    if (userTotal > targetNumber) {
      loss();
    }
  }
  function gameReset() {
    blueCounter = Math.floor(Math.random() * 12) + 1;
    greenCounter = Math.floor(Math.random() * 12) + 1;
    yellowCounter = Math.floor(Math.random() * 12) + 1;
    pinkCounter = Math.floor(Math.random() * 12) + 1;
    targetNumber = 19 + Math.floor(Math.random() * 101) + 19;

    userTotal = 0;
    $("#your-score").text(userTotal);

    $("#score-to-match").text(targetNumber);
  }
  gameStart();
});
