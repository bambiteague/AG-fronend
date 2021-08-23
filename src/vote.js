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

  // need to add to each postCard Like I did with the delete button for Posts
  // need event listeners


}

