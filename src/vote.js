const post = Post;
const POST_URL = "http://localhost:3000/posts";
const EMPTY_VOTE = '▼'
const FULL_VOTE = '▲'

class Vote {
  
  constructor(upVote, downVote) {
    this.upVote = upVote;
    this.downVote = downVote;
  }

}

// glyphicon glyphicon-arrow-down	
// glyphicon glyphicon-arrow-up
