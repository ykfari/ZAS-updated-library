const INITIAL_BOOK_COUNT = 16;

document.addEventListener('DOMContentLoaded', () => {
    const catalogue = createCatalogue();
    catalogue.renderHome();
    setupReviewDisplay();
    setupModal();
});

function createCatalogue() {
    const section = document.querySelector('.featured-books');
    const title = section.querySelector('h2');
    const grid = document.getElementById('collection-grid');
    const status = document.getElementById('search-status');
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');
    const category = document.getElementById('category-filter');
    const clearButton = document.getElementById('clear-search');

    const removeSupplementaryCatalogue = () => {
        section.querySelector('.see-more-container')?.remove();
        section.querySelector('.hidden-books')?.remove();
    };

    const renderCards = (container, bookList) => {
        container.replaceChildren(...bookList.map(createBookCard));
    };

    const renderHome = () => {
        removeSupplementaryCatalogue();
        title.textContent = 'Library Book Collection';
        status.textContent = `Showing ${books.length} books.`;
        clearButton.hidden = true;

        renderCards(grid, books.slice(0, INITIAL_BOOK_COUNT));
        const remainingBooks = books.slice(INITIAL_BOOK_COUNT);
        if (remainingBooks.length === 0) return;

        const controls = document.createElement('div');
        controls.className = 'see-more-container';
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'see-more-btn';
        button.setAttribute('aria-expanded', 'false');
        button.innerHTML = `<i class="fas fa-chevron-down" aria-hidden="true"></i> See More Books (${remainingBooks.length} more)`;
        controls.append(button);

        const hiddenBooks = document.createElement('div');
        hiddenBooks.className = 'book-grid hidden-books';
        hiddenBooks.id = 'hiddenBooks';
        hiddenBooks.hidden = true;
        renderCards(hiddenBooks, remainingBooks);

        button.addEventListener('click', () => {
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isOpen));
            hiddenBooks.hidden = isOpen;
            hiddenBooks.classList.toggle('show', !isOpen);
            button.innerHTML = isOpen
                ? `<i class="fas fa-chevron-down" aria-hidden="true"></i> See More Books (${remainingBooks.length} more)`
                : '<i class="fas fa-chevron-up" aria-hidden="true"></i> Show Less';
        });

        grid.after(controls, hiddenBooks);
    };

    const search = () => {
        const searchText = input.value.trim().toLowerCase();
        const selectedCategory = category.value.toLowerCase();

        if (!searchText && !selectedCategory) {
            renderHome();
            return;
        }

        const results = books.filter((book) => {
            const searchableText = `${book.title} ${book.author} ${book.genre}`.toLowerCase();
            const matchesText = !searchText || searchableText.includes(searchText);
            const matchesCategory = !selectedCategory || book.genre.toLowerCase().includes(selectedCategory);
            return matchesText && matchesCategory;
        });

        removeSupplementaryCatalogue();
        title.textContent = 'Search Results';
        clearButton.hidden = false;
        status.textContent = `${results.length} ${results.length === 1 ? 'book' : 'books'} found.`;

        if (results.length === 0) {
            const message = document.createElement('p');
            message.textContent = 'No books match your search criteria. Please try again.';
            grid.replaceChildren(message);
        } else {
            renderCards(grid, results);
        }
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        search();
    });

    clearButton.addEventListener('click', () => {
        form.reset();
        renderHome();
        input.focus();
    });

    return { renderHome };
}

function createBookCard(book) {
    const card = document.createElement('article');
    card.className = 'book-card';

    const cover = document.createElement('div');
    cover.className = 'book-cover';
    const image = document.createElement('img');
    image.src = book.coverImage;
    image.alt = `Cover of ${book.title}`;
    cover.append(image);

    const description = document.createElement('div');
    description.className = 'book-description';
    const descriptionText = document.createElement('p');
    descriptionText.textContent = book.description;
    description.append(descriptionText);
    cover.append(description);
    const descriptionToggle = document.createElement('button');
    descriptionToggle.type = 'button';
    descriptionToggle.className = 'book-description-toggle';
    descriptionToggle.setAttribute('aria-label', `Show description of ${book.title}`);
    descriptionToggle.setAttribute('aria-expanded', 'false');
    descriptionToggle.addEventListener('click', () => {
        const isOpen = descriptionToggle.getAttribute('aria-expanded') === 'true';
        descriptionToggle.setAttribute('aria-expanded', String(!isOpen));
        descriptionToggle.setAttribute('aria-label', `${isOpen ? 'Show' : 'Hide'} description of ${book.title}`);
        cover.classList.toggle('description-open', !isOpen);
    });
    cover.append(descriptionToggle);

    const info = document.createElement('div');
    info.className = 'book-info';
    const bookTitle = document.createElement('h3');
    bookTitle.textContent = book.title;
    const author = document.createElement('p');
    author.className = 'author';
    author.textContent = book.author;
    const genre = document.createElement('p');
    genre.className = 'genre';
    genre.textContent = `Genre: ${book.genre}`;
    info.append(bookTitle, author, genre);

    const actions = document.createElement('div');
    actions.className = 'book-actions';
    const detailsLink = document.createElement('a');
    detailsLink.className = 'view-details';
    detailsLink.href = book.detailsUrl;
    detailsLink.target = '_blank';
    detailsLink.textContent = 'View Details';
    actions.append(detailsLink);

    if (book.downloadUrl) {
        const downloadLink = document.createElement('a');
        downloadLink.className = 'download-book';
        downloadLink.href = book.downloadUrl;
        downloadLink.target = '_blank';
        downloadLink.innerHTML = '<i class="fas fa-download" aria-hidden="true"></i> Download';
        actions.append(downloadLink);
    }

    info.append(actions);
    card.append(cover, info);
    return card;
}

function setupModal() {
    const modal = document.getElementById('rulesModal');
    const dialog = modal.querySelector('.modal-container');
    const closeButton = modal.querySelector('.modal-close');
    const triggers = document.querySelectorAll('.modal-trigger');
    let opener = null;

    const getFocusableElements = () => [...dialog.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )];

    const close = () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
        opener?.focus();
    };

    const open = (trigger) => {
        opener = trigger;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        closeButton.focus();
    };

    triggers.forEach((trigger) => trigger.addEventListener('click', (event) => {
        event.preventDefault();
        open(trigger);
    }));
    closeButton.addEventListener('click', close);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) close();
    });
    document.addEventListener('keydown', (event) => {
        if (!modal.classList.contains('active')) return;
        if (event.key === 'Escape') {
            close();
            return;
        }
        if (event.key !== 'Tab') return;

        const focusable = getFocusableElements();
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first) {
            event.preventDefault();
            dialog.focus();
        } else if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });
}

function setupReviewDisplay() {
    const grid = document.querySelector('.reviews-grid');
    if (!grid) return;

    const cards = [...grid.querySelectorAll('.review-card')];
    if (cards.length === 0) return;

    grid.id = 'reviews-grid';
    const controls = document.createElement('div');
    controls.className = 'see-more-container reviews-see-more-container';
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'see-more-btn';
    button.setAttribute('aria-controls', grid.id);
    controls.append(button);
    grid.after(controls);

    let expanded = false;
    let resizeFrame = null;

    const updateButton = (hiddenCount) => {
        button.setAttribute('aria-expanded', String(expanded));
        button.innerHTML = expanded
            ? '<i class="fas fa-chevron-up" aria-hidden="true"></i> Show Less'
            : `<i class="fas fa-chevron-down" aria-hidden="true"></i> See More Reviews (${hiddenCount} more)`;
    };

    const collapse = () => {
        cards.forEach((card) => card.classList.remove('review-hidden'));
        const rowTops = [...new Set(cards.map((card) => card.offsetTop))];
        const thirdRowTop = rowTops[2];
        const hiddenCards = thirdRowTop === undefined
            ? []
            : cards.filter((card) => card.offsetTop > thirdRowTop);

        hiddenCards.forEach((card) => card.classList.add('review-hidden'));
        controls.hidden = hiddenCards.length === 0;
        updateButton(hiddenCards.length);
    };

    button.addEventListener('click', () => {
        expanded = !expanded;
        if (expanded) {
            cards.forEach((card) => card.classList.remove('review-hidden'));
            updateButton(0);
        } else {
            collapse();
            controls.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });

    collapse();
    window.addEventListener('resize', () => {
        if (expanded || resizeFrame) return;
        resizeFrame = window.requestAnimationFrame(() => {
            resizeFrame = null;
            collapse();
        });
    });
}
