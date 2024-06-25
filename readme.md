# Library Management System
> - This project is a simple web-based library management system that allows users to add books to their library, track the total number of books, and the total number of pages read. The system provides a user-friendly interface for managing a personal book collection.

## Features
 - Add books to the library with title, author, and page count.
- Mark books as read or unread.
- Display the total number of books added.
- Display the total number of pages read.
- Blur the background when adding a new book to the library for better focus.
 ## Installation
```md
1. Clone the repository:
git clone https://github.com/yourusername/library-management-system.git

2. Open the index.html file in your browser to view the application. (live)
```
## live
- https://rootpown.github.io/laughing-pancake-lib-/
## Usage
- Click the "Add Book" button to open the book entry form.
- Fill in the book details: title, author, number of pages, and mark if the book is read.
- Click the "Submit" button to add the book to your library.
- The book details will be displayed, and the total book count and page count will be updated.
## Code Structure
> Variables:

- bookCount: Tracks the total number of books added.
- totalPages: Tracks the total number of pages read.
> Functions:

- libraryForm(): Initializes the form and sets up event listeners for form interactions.
- blurBody(): Applies a blur effect to all elements except the library form.
- isDescendant(parent, child): Checks if an element is a descendant of another element.
- clearBlur(): Removes the blur effect from all elements.
- myLibrary(): Handles the addition of books to the library and updates the display.
### CSS Styling
> The project uses basic CSS for styling the form and library display:

- The #block element is hidden by default and shown when the "Add Book" button is clicked.
- The #wrapper element centers the form on the page.
- Various CSS classes and IDs are used to style inputs, buttons, and the display of book details.

```sh
created thinkpown
````