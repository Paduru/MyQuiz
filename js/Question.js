class Question {
  constructor() {
    this.title = createElement("h1", "MyQuiz Game");
    this.question = createElement(
      "h2",
      'Question: What starts and ends with the letter "E", but has only one letter?'
    );
    this.option1 = createElement("h3", "1: Everyone");
    this.option2 = createElement("h3", "2: Envolpe");
    this.option3 = createElement("h3", "3: Estimate");
    this.option4 = createElement("h3", "4: Example");
    this.input1 = createInput("Enter Name");
    this.input2 = createInput("Enter Option No.");
    this.button = createButton("Submit");
    this.reset = createButton("Reset");
  }
  display() {
    this.title.position(350, 0);

    this.question.position(50, 50);

    this.option1.position(50, 125);

    this.option2.position(50, 150);

    this.option3.position(50, 175);

    this.option4.position(50, 200);

    this.input1.position(50, 300);

    this.input2.position(275, 300);

    this.button.position(500, 300);

    this.reset.position(800, 375);

    this.button.mousePressed(() => {
      this.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.reset.mousePressed(() => {
      contestant.updateCount(0);
      quiz.updateState(0);
    });
  }
  hide() {
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
  }
}
