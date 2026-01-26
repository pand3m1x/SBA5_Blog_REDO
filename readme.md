A brief description of your project.
  brief description

Instructions on how to run the application (if anything beyond opening index.html in a browser is needed).
  n/a
A reflection on your development process, challenges faced, and how you overcame them.
  Struggling with call functions.

Any known issues or features not implemented.

1 Create New Posts:

A form with fields for a post title and post content []
Upon submission, the new post should be added to a list of posts displayed on the page.[]
The form should be validated: both title and content are required.[]
Display custom, user-friendly error messages if validation fails. []

2 Display Posts:

All created posts should be displayed on the page. Each displayed post should clearly show its title and content. []
Posts should be rendered dynamically using JavaScript. []

3 Edit Posts:

Each displayed post should have an “Edit” button. []
Clicking “Edit” should allow the user to modify the title and content of that specific post. This might involve populating the main form (or a modal form) with the existing post data. []
After editing, the updated post should be reflected in the display. []
Form validation should also apply during editing. []

4 Delete Posts:

Each displayed post should have a “Delete” button. []
Clicking “Delete” should remove the post from the display and from localStorage. []

5 Data Persistence with localStorage:

All blog posts (title, content, and perhaps a unique ID and timestamp you generate) must be saved in localStorage. []
When the page is loaded or refreshed, any posts previously saved in localStorage should be retrieved and displayed. []
Updates (from edits) and deletions must also be reflected in localStorage.[]