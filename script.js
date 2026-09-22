document.getElementById('add-btn').addEventListener('click', function() {
    const titleInput = document.getElementById('note-title');
    const bodyInput = document.getElementById('note-body');
    const titleText = titleInput.value.trim();
    const bodyText = bodyInput.value.trim();

    if (titleText === '' || bodyText === '') {
        alert('Please fill in both the title and the note body.');
        return;
    }

    // Create Note Element
    const noteCard = document.createElement('div');
    noteCard.classList.add('note-card');

    const titleElement = document.createElement('h3');
    titleElement.textContent = titleText;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = bodyText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        noteCard.remove();
    });

    // Append elements to the card
    noteCard.appendChild(titleElement);
    noteCard.appendChild(bodyElement);
    noteCard.appendChild(deleteBtn);

    // Append card to the container
    document.getElementById('notes-container').prepend(noteCard);

    // Clear inputs
    titleInput.value = '';
    bodyInput.value = '';
});sc