const post = Post;
const POST_URL = "http://localhost:3000/posts";
const EMPTY_VOTE = "▼";
const FULL_VOTE = "▲";

class Vote {
  static postBtn = document.getElementById("post-button");

  constructor(upVote, downVote) {
    this.upVote = upVote;
    this.downVote = downVote;
  }
  // button, class="btn btn-default btn-sm
  // div id="post-button" < where I stored both buttons
  // ^ need to add to each postCard
}
