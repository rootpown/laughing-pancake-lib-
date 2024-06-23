let bookCount = 0;
let totalPages = 0;
function libraryForm() { 
    const button = document.getElementById("button-form");
    const libraryBlock = document.getElementById("block");
    const hiddenForm = document.getElementById('hide-btn');
    button.addEventListener('click', () => { 
        libraryBlock.style.display = `block`;
    });
    hiddenForm.addEventListener('click', () => { 
        libraryBlock.style.display = `none`;
    });
}
function myLibrary() { 
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const isReadInput = document.getElementById('isRead');
    const submitForm = document.getElementById('submit-btn');
    const libraryBlock = document.getElementById("block");
    const bookCountElement = document.getElementById('book-count');
    const totalPagesElement = document.getElementById('total-pages');
    const errorMessage = document.getElementById('error-message');
    
    submitForm.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const pages = pagesInput.value.trim();
        
        if (title === '' || author === '' || pages === '') {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            
            const library = { 
                title: title,
                author: author,
                pages: parseInt(pages),
                isRead: isReadInput.checked
            }
            
            console.log(library);
            // Update book count and total pages
            bookCount++;
            totalPages += library.pages;
            bookCountElement.innerText = `Books added: ${bookCount}`;
            totalPagesElement.innerText = `Total pages: ${totalPages}`;

            // Hide the form
            libraryBlock.style.display = `none`;

            // Display book info
            const infoBlock = document.getElementById('info_block');
            const bookDiv = document.createElement('div');
            bookDiv.innerHTML = `<div>${library.title}</div>
                                 <div>${library.author}</div>
                                 <div>${library.pages}</div>
                                 <div>${library.isRead ? 'Yes' : 'No'}</div>`;
            infoBlock.appendChild(bookDiv);

            // Clear the form inputs
            titleInput.value = '';
            authorInput.value = '';
            pagesInput.value = '';
            isReadInput.checked = false;
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    libraryForm();
    myLibrary();
});
