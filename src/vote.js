const post = Post;
class Vote {
  static postById(id) {
    post.id;
  }

  static upVote() {
    post.votes.upVote;
  }

  static downVote() {
    post.votes.downVote;
  }

  constructor(upVote, downVote) {
    this.upVote = upVote;
    this.downVote = downVote;
  }

  addUpVote() {}

  addDownVote() {}
  // a Post has_many Votes
  // create a up arrow/down arrow symbol/button
  // create onclick event listener
  // on click, up or down vote counter should change accordingly and show count next to the symbol
  // IF upVote has been selected & THEN downVote is clicked, deselect that upVote (yeah? this one is less important/not necessary for deliverables)
}
