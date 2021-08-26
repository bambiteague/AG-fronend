const COMMENT_URL = "http://localhost:3000/comments";
class Comment {
  static all = [];
  static postGrid = document.getElementById("post-grid");

  constructor(post_id, content, post, id) {
    this.post_id = post_id;
    this.content = content;
    this.post = post;
    this.id = id;
    Comment.all.push(this);
  }

  renderComment() {
    const commentDisplay = document.createTextNode(this.content);
    this.post.card.appendChild(commentDisplay);
  }

  static createComment(post, comment) {
    const commentPayload = {
      comment: { content: comment, post_id: post.id },
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify(commentPayload),
    };

    fetch(COMMENT_URL, configObj)
      .then((r) => r.json())
      .then((comment) => {
        const newComment = new Comment(comment.post_id, comment.content, post);
       
        newComment.renderComment();
      });
  }
}
