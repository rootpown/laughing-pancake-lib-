// Переменные для подсчета книг и страниц
let bookCount = 0;
let totalPages = 0;

// Функция инициализации формы библиотеки
function libraryForm() { 
    const button = document.getElementById("button-form");
    const libraryBlock = document.getElementById("block");
    const hiddenForm = document.getElementById('hide-btn');

    // Слушатель события на кнопке открытия формы библиотеки
    button.addEventListener('click', () => { 
        libraryBlock.style.display = `block`;
        blurBody();
    });

    // Слушатель события на кнопке закрытия формы библиотеки
    hiddenForm.addEventListener('click', () => { 
        libraryBlock.style.display = `none`;
        clearBlur();
    });
}

/**
 * Функция для применения размытия ко всем блокам кроме libraryBlock 
 */
function blurBody() {
    const allElements = document.body.querySelectorAll('*');
    const libraryBlock = document.getElementById("block");
    const wrapper = document.getElementById('wrapper')
    allElements.forEach(element => {
        // Проверяем, что элемент не является libraryBlock и не является его прямым потомком
        if (element !== wrapper && !isDescendant(wrapper, element)) {
            element.style.filter = 'blur(2px)';
        }
    });
}

/**
 * Функция для проверки, является ли элемент потомком другого элемента
 */
function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * Функция для очистки размытия у всех элементов
 */
function clearBlur() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.filter = '';
    });
}

/**
 * Функция для добавления книги в библиотеку
 */
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
    const infoBlock = document.getElementById('info_block');

    // Слушатель события на кнопке добавления книги
    submitForm.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();
        const pages = pagesInput.value.trim();
        
        // Проверка на пустой ввод
        if (title === '' || author === '' || pages === '') {
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            
            const library = { 
                title: title,
                author: author,
                pages: parseInt(pages),
                isRead: isReadInput.checked
            };
            
            bookCount++;
            totalPages += library.pages;
            bookCountElement.innerText = `Books added: ${bookCount}`;
            totalPagesElement.innerText = `Total pages: ${totalPages}`;

            const bookDiv = document.createElement('div');
            bookDiv.innerHTML = `<div>TITLE: ${library.title}</div>
                                 <div>AUTHOR: ${library.author}</div>
                                 <div>PAGES: ${library.pages}</div>
                                 <div>READ: ${library.isRead ? 'Yes' : 'No'}</div>`;
            infoBlock.appendChild(bookDiv);

            titleInput.value = '';
            authorInput.value = '';
            pagesInput.value = '';
            isReadInput.checked = false;

            libraryBlock.style.display = `none`;
            clearBlur();
        }
    });
}

// Слушатель события на загрузку документа для инициализации функций
document.addEventListener('DOMContentLoaded', () => {
    libraryForm();
    myLibrary();
});
