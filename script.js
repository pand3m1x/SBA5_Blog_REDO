// Create New Posts, with both fields filled requirement, posts displayed, error message [x]
// Dynamically added posted posts that can be edited []
// Edit Posts with clear edit button, form validation []
// Delete Button that also works to remove from local storage []
// Data Persistance with Local Storage []

// let title = document.getElementById("title").value;
// let content = document.getElementById("content").value;
// document.addEventListener("DOMContentLoaded", loadPosts); this is for HTML code that don't have script at bottom

//♫⋆｡♪ ₊˚♬ ﾟ.  Variables I want access to outside of greedy functions =-= ♫⋆｡♪ ₊˚♬ ﾟ.


//♫⋆｡♪ ₊˚♬ ﾟ. Adding the Blog Post  ♫⋆｡♪ ₊˚♬ ﾟ.
const postButton = document.getElementById("postButton");
const postsContainer = document.getElementById("posts")

postButton.addEventListener("click", addPost);

function addPost() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

    console.log("Trying to post:", title, content);

  if (title === ""){
    alert ("Please enter a title for your blog post 😀");
    return;
  }

  if (content === ""){
    alert ("Tell the world your thoughts by filling out the content box 😀");
    return;
  }
//If both conditions are met the post should be made with below code 
  if (title && content) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));

  loadPosts();
  console.log("posted!")
  };
};


//♫⋆｡♪ ₊˚♬ ﾟ. Editing the Blog Post ♫⋆｡♪ ₊˚♬ ﾟ.

function editPost(index, element, field){
// const editButton = document.createElement("button");
// editButton.innerText = "✏️"
// posts.appendChild(editButton)
//   editButton.addEventListener("click", (e) =>
//     editPost(e.target.parentElement))
const posts = JSON.parse(localStorage.getItem("posts")) || [];
const newTitle = promt("edit title:", posts[index].title);
const newContent = prompt("edit content:", posts[index].content);

if (newTitle === ""){
  alert ("You need a title! 😀");
  return;
}
if (newContent === ""){
  alert ("You gotta have something in the content box! 😀");
  return;
}
posts[index].title = newTitle;
posts[index].content = newContent;

localStorage.setItem("posts", JSON.stringify(posts));
}

//♫⋆｡♪ ₊˚♬ ﾟ. Deleting the Blog Post  ♫⋆｡♪ ₊˚♬ ﾟ.

//♫⋆｡♪ ₊˚♬ ﾟ. Ideas for Later! ♫⋆｡♪ ₊˚♬ ﾟ.
//  Music player youtube.com/watch?v=qRkv3gPPRME - or - this one is probably better and less distracting https://www.youtube.com/watch?v=GGU7yCmhjRY
//  Button that shoots out music notes when submit is hit
//  Is it possible to make a background with emojis?
//  adding a date stamp?
//  adding -- Hachi to the end of every entry? Like as a sig

//                            ෴⚘⎧ᴿᴵᴾ⎫⚘෴CODE GRAVEYARD ִֶָ෴⚘⎧ᴿᴵᴾ⎫⚘෴