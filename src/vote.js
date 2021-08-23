const id = Post.id;
class Vote {
  static post(id) {
    const post = Post.findbyid[id];
  }

  static upVote() {}

  static downVote() {}

  constructor(upVote, downVote) {
    this.upVote = upVote;
    this.downVote = downVote;
  }

  // a Post has_many Votes
  // create a up arrow/down arrow symbol/button
  // create onclick event listener
  // on click, up or down vote counter should change accordingly and show count next to the symbol

  // IF upVote has been selected & THEN downVote is clicked, deselect that upVote (yeah? this one is less important/not necessary for deliverables)
}
