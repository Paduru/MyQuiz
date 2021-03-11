class Quiz {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", (data) => {
      gameState = data.val();
    });
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database
        .ref("contestantCount")
        .once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question();
      question.display();
    }
  }
  play() {
    question.hide();
    background("yellow");
    let heading = createElement("h1", "Results of the Quiz");
    heading.position(50, 0);
    Contestant.getContestantInfo();
    if (allContestants !== undefined) {
      console.log(allContestants);
      let note = createElement(
        "h2",
        "*NOTE: Contestants who answered correct are highlighted in green color!"
      );
      note.position(50, 250);
      var y = 0;
      for (var plr in allContestants) {
        let correctAns = "2";
        if (correctAns === allContestants[plr].answer) {
          fill("green");
        } else {
          fill("red");
        }
        textSize(25);
        text(
          allContestants[plr].name + ": " + allContestants[plr].answer,
          50 + y,
          350
        );
        y += 200;
      }
    }
  }
}
