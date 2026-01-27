// Create New Posts, with both fields filled requirement, posts displayed, error message [x]
// Dynamically added posted posts that can be edited [x]
// Edit Posts with clear edit button, form validation [x]
// Delete Button that also works to remove from local storage []
// Data Persistance with Local Storage []

// let title = document.getElementById("title").value;
// let content = document.getElementById("content").value;
// document.addEventListener("DOMContentLoaded", loadPosts); this is for HTML code that don't have script at bottom

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
  console.log("Success-fully posted!")
  };
};
  
  function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    postsContainer.innerHTML = "";

    posts.forEach((post,index) => {
      const div = document.createElement("div");
      div.className = "post";
      const h3 = document.createElement("h3");
      h3.className = "post-title";
      h3.textContent = post.title;
      const p = document.createElement("p");
      p.className = "post-content";
      p.textContent = post.content;
      const editButton = document.createElement("button");
      editButton.innerText = "✏️";

      editButton.addEventListener("click", function (){
        editPost(index);
      })
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "🗑️";

      deleteButton.addEventListener("click", function (){
        deletePost(index);
      })

      div.append(h3, p, editButton, deleteButton);
      postsContainer.appendChild(div);
    });
  };
loadPosts();
console.log("You pushed the post button, but did anything happen?")


//♫⋆｡♪ ₊˚♬ ﾟ. Editing the Blog Post ♫⋆｡♪ ₊˚♬ ﾟ.

function editPost(index){
const posts = JSON.parse(localStorage.getItem("posts")) || [];
const newTitle = prompt("edit title:", posts[index].title);
const newContent = prompt("edit content:", posts[index].content);

if (newTitle === ""){
  alert ("You need a title! 😀"); // these alerts aren't populating while the field is empty, will need to change this to inline editing?
  return;
}
if (newContent === ""){
  alert ("You gotta have something in the content box! 😀"); // same as above. Will need to add event.preventDefault() I think.
  return;
}
posts[index].title = newTitle;
posts[index].content = newContent;

localStorage.setItem("posts", JSON.stringify(posts));
console.log("post edited!")
loadPosts(); // can load/render be outside of a function, is it best for it to be inside of the function?
}


function deletePost(index) {
  alert("Are you sure?")

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  loadPosts(); // the answer to the above is yes, or it won't properly call the new state after the function has been ran
}
//Big (-ish) problem, the posts don't go back to clear... will need to fix

//♫⋆｡♪ ₊˚♬ ﾟ. Deleting the Blog Post  ♫⋆｡♪ ₊˚♬ ﾟ.

//♫⋆｡♪ ₊˚♬ ﾟ. Ideas for Later! ♫⋆｡♪ ₊˚♬ ﾟ.
//  Music player youtube.com/watch?v=qRkv3gPPRME - or - this one is probably better and less distracting https://www.youtube.com/watch?v=GGU7yCmhjRY
//  Button that shoots out music notes when submit is hit
//  Is it possible to make a background with emojis?
//  adding a date stamp?
//  adding -- Hachi to the end of every entry? Like as a sig

//                            ෴⚘⎧ᴿᴵᴾ⎫⚘෴CODE GRAVEYARD ִֶָ෴⚘⎧ᴿᴵᴾ⎫⚘෴

// const editButton = document.createElement("button");
// editButton.innerText = "✏️"
// posts.appendChild(editButton)
//   editButton.addEventListener("click", (e) =>
//     editPost(e.target.parentElement))