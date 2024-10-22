document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const commentText = document.getElementById('commentText').value;
    if (commentText) {
        const commentList = document.getElementById('commentList');
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p>${commentText}</p>`;
        commentList.appendChild(newComment);

        
        document.getElementById('commentText').value = '';
    }
});