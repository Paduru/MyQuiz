var canvas;
var quiz, question, contestant;
var gameState, contestantCount;
var database, allContestants;

function setup() {
  gameState = 0;
  database = firebase.database();
  canvas = createCanvas(850, 400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}

function draw() {
  background("pink");
  if (contestantCount === 4) {
    quiz.updateState(1);
  }
  if (gameState === 1) {
    quiz.play();
  }
}
