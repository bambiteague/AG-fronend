class Comment {
  static all = [];
  static postGrid = document.getElementById("post-grid");

  constructor(post_id, content, comment_author) {
    this.post_id = post_id;
    this.content = content;
    this.comment_author = comment_author;
    this.card = document.getElementsByTagName("div")

    Comment.all.push(this);
  }

  // after creating a comment, it needs to be appended to the DOM onto each postCard
  // need a input area and submit button for the comment form
  // input area will reset/get wiped after submitting comment
  // comments will persist (in real time) on each postCard for that specific post using the post_id attribute (posts have_many comments)

  // what I am struggling with most is getting the form to actually show up on the postCard & haven't figured out why I'm struggling. 

  static createComment(data) {
    const form = document.getElementByTag("form");
    const commentInfo = {
      content: data.value,
    };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Accept: "application/json",
      },
      body: JSON.stringify(commentInfo),
    };

    fetch(POST_URL, configObj)
      .then((r) => r.json())
      .then((json) => {
        json.forEach((data) => {
        const c = new Comment({
          content: json.commentInfo,
        });
        // c.attachToDom();
      });
    });
  }


}
