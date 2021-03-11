class Contestant {
  constructor() {
    this.index = null;
    this.answer = null;
    this.name = null;
  }
  getCount() {
    var contestantCountRef = database.ref("contestantCount");
    contestantCountRef.on("value", (data) => {
      contestantCount = data.val();
    });
  }
  updateCount(count) {
    database.ref("/").update({
      contestantCount: count,
    });
  }
  update() {
    var contestantIndex = "players/player" + this.index;
    database.ref(contestantIndex).set({
      name: this.name,
      answer: this.answer,
    });
  }
  static getContestantInfo() {
    var allContestantInfoRef = database.ref("players");

    allContestantInfoRef.on("value", (data) => {
      allContestants = data.val();
    });
  }
}
