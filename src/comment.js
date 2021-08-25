class Comment {
  static all = [];
  static postGrid = document.getElementById("post-grid");

  constructor(post_id, content, comment_author) {
    this.post_id = post_id;
    this.content = content;
    this.comment_author = comment_author;

    Comment.all.push(this);
  }

  // static createComment(data) {
  //   const form = document.getElementByTag("form");
  //   const commentInfo = {
  //     content: data.value,
  //   };
  //   const configObj = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",

  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(commentInfo),
  //   };

  //   fetch(POST_URL, configObj)
  //     .then((r) => r.json())
  //     .then((json) => {
  //       json.forEach((data) => {
  //       const c = new Comment({
  //         content: json.commentInfo,
  //       });
  //       // c.attachToDom();
  //     });
  //   });
  // }
}
